<template>
  <div
    v-if="currentChoice"
    class="wizard"
  >
    <nav
      v-if="activeStep > 0"
      class="breadcrumb-container"
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb">
        <li
          v-for="(madeChoice, index) in breadcrumbsChoices"
          :key="index"
          class="breadcrumb-item"
        >
          <a
            href="#"
            @click="moveToStep(index)"
          >{{ truncate(madeChoice.question, 60) }}</a>
        </li>
      </ol>
    </nav>

    <div
      ref="page-content"
      tabindex="-1"
    >
      <p
        v-if="currentChoice.comment"
        class="h4 pb-4"
      >
        {{ currentChoice.comment }}
      </p>

      <div
        v-if="activeStep === 0"
        class="container lead pb-4"
      >
        <div class="row justify-content-center">
          <div class="col-12 col-xl-6 col-lg-8 col-md-10">
            <p class="text-center h3">
              Ciao! 👋
            </p>
            <p class="h3">
              Ci fa piacere che tu voglia contribuire al miglioramento dei servizi pubblici
              digitali del Paese.
            </p>
            <p>
              Questo strumento è pensato per aiutare gli aspiranti contributori a migliorare,
              con azioni concrete, il software libero per la pubblica amministrazione,
              bene comune di tutto il Paese.
            </p>
          </div>
        </div>
      </div>
      <h1 class="h3">
        {{ currentChoice.question }}
      </h1>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-6 col-lg-8 col-md-10">
            <ul
              v-if="!isLeaf(currentChoice)"
              class="choices"
              aria-label="Scegli una delle opzioni seguenti:"
            >
              <li
                v-for="(possibleChoice, index) in currentChoice.content"
                :key="possibleChoice.label"
              >
                <o-button
                  v-bind="styleConfig.button"
                  class="choice"
                  variant="outline-primary"
                  @click="selectChoice(possibleChoice, index)"
                >
                  {{ possibleChoice.label }}
                </o-button>
              </li>
            </ul>
            <div v-else>
              <h1 class="h3">
                {{ currentChoice.label }}
              </h1>
              <vue-markdown-lite class="reply my-4 p-5">
                {{ currentChoice.content }}
              </vue-markdown-lite>
            </div>

            <o-button
              v-if="activeStep > 0"
              v-bind="styledConfig.button"
              class="choice"
              variant="secondary"
              @click="goBack()"
            >
              <o-icon
                v-bind="styledConfig.icon"
                class="icon icon-white"
                icon="arrow-left-circle"
              /> Indietro
            </o-button>
            <o-button
              v-if="isLeaf(currentChoice)"
              v-bind="styledConfig.button"
              class="choice"
              variant="primary"
              @click="restart()"
            >
              <o-icon
                v-bind="styledConfig.icon"
                class="icon icon-white"
                icon="restore"
              /> Ricomincia
            </o-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdownLite from '@earthtone/vue-markdown-lite';
import { initMatomo, logAction } from '@/analytics';

export default {
  name: 'Wizard',
  components: {
    'vue-markdown-lite': VueMarkdownLite,
  },
  props: {
    matomoSiteId: {
      type: String,
      default: '',
    },
    configurationUrl: {
      type: String,
      default: 'https://raw.githubusercontent.com/italia/wizard-italia/main/src/configuration/tree.json',
    },
    styleConfig: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      activeStep: 0,
      choices: [],
      completed: false,
    };
  },
  computed: {
    styledConfig() {
      const styleConfig = { ...this.styleConfig };
      if (styleConfig.iconComponent) {
        styleConfig.icon = {};
        styleConfig.icon.component = styleConfig.iconComponent;
        styleConfig.icon.pack = styleConfig.iconPack;
      }
      return styleConfig;
    },
    currentChoice() {
      return this.choices[this.choices.length - 1];
    },
    breadcrumbsChoices() {
      const notLeafChoices = this.choices.filter((choice) => !this.isLeaf(choice));
      return notLeafChoices.splice(0, notLeafChoices.length - 1);
    },
  },
  mounted() {
    if (this.matomoSiteId) {
      initMatomo(this.matomoSiteId);
    }
    fetch(this.configurationUrl)
      .then((response) => response.json())
      .then((data) => {
        this.choices.push(data.root);
        window.history.pushState({ choices: this.choices, activeStep: this.activeStep }, '');
      });

    window.onpopstate = (event) => {
      if (!event.state) {
        return;
      }
      this.choices = event.state.choices;
      this.activeStep = event.state.activeStep;
    };

    window.onbeforeunload = () => {
      if (!this.completed) {
        // TRACK DROPOUT
        logAction('dropout', this.currentChoice.question || this.currentChoice.label);
      }
    };
  },
  methods: {
    truncate(text, len) {
      return text.length > len ? `${text.slice(0, len)}…` : text;
    },
    restart() {
      window.location.reload();
    },
    goBack() {
      if (!this.completed) {
        // TRACK BACK
        logAction('back', this.currentChoice.question || this.currentChoice.label);
      }
      this.moveToStep(this.activeStep - 1);
      this.focusContent();
    },
    focusContent() {
      this.$nextTick(() => {
        this.$refs['page-content'].focus();
      });
    },
    isLeaf(node) {
      if (typeof (node.content) === 'string') {
        if (!this.completed) {
          this.completed = true;
          // TRACK COMPLETED
          logAction('completed', this.currentChoice.question || this.currentChoice.label);
        }
        return true;
      }
      return false;
    },
    selectChoice(currentChoice) {
      this.choices.push(currentChoice);
      this.activeStep = this.choices.length - 1;
      window.history.pushState({ choices: this.choices, activeStep: this.activeStep }, '');

      this.$emit('choice', currentChoice.question || currentChoice.label);
      logAction('choice', this.currentChoice.question || this.currentChoice.label);

      /* Focus the newly loaded content to guide assistive technologies */
      this.focusContent();
      this.$nextTick(() => {
        document.querySelectorAll('.reply a').forEach((el) => {
          el.addEventListener('click', () => logAction('link', el.href));
        });
      });
    },
    moveToStep(step) {
      this.activeStep = step;
      this.choices = this.choices.slice(0, step + 1);
    },
  },
};
</script>

<style scoped>
.breadcrumb-item:after {
  content: '/';
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 600;
}
ul.choices {
  margin-top: 2rem;
  list-style-type: none;
  padding-left: 0;
}
.choice {
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
}
.reply {
  background-color: #dce9f5;
  text-align: left;
}
.choice.btn-outline-primary:hover {
  background-color: #dce9f5;
  color: #06c;
}
</style>
