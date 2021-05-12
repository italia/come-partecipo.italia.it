<template>
  <div class="wizard" v-if="currentChoice">

    <nav
      v-if="activeStep > 0"
      class="breadcrumb-container" aria-label="breadcrumb"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="(madeChoice, index) in breadcrumbsChoices" :key="index">
          <a href="#" @click="moveToStep(index)">{{ truncate(madeChoice.question, 60) }}</a>
        </li>
      </ol>
    </nav>

    <h1 v-if="currentChoice.comment" class="h3">{{ currentChoice.comment }}</h1>
    <h1 class="h3">{{ currentChoice.question }}</h1>

    <div class="container">
      <ul
        v-if="!isLeaf(currentChoice)"
        class="choices"
        aria-label="Scegli una delle opzioni seguenti:"
      >
        <li v-for="(possibleChoice, index) in currentChoice.content" :key="possibleChoice.label">
          <o-button
            class="choice col-12 col-xl-6 col-lg-6"
            variant="outline-primary"
            @click="selectChoice(possibleChoice, index)"
            >
            {{possibleChoice.label}}
          </o-button>
        </li>
      </ul>
      <div v-else>
        <h1 class="h3">{{ currentChoice.label }}</h1>
        <vue-markdown-lite class="reply my-2 p-5">{{ currentChoice.content }}</vue-markdown-lite>
      </div>

      <o-button
        v-if="activeStep > 0"
        class="choice col-12 col-xl-6 col-lg-6"
        variant="secondary"
        @click="goBack()"
      >
        <o-icon class="icon icon-white" icon="arrow-left-circle"></o-icon> Indietro
      </o-button>
      <o-button
        v-if="isLeaf(currentChoice)"
        class="choice col-12 col-xl-6 col-lg-6"
        variant="primary"
        @click="restart()"
      >
        <o-icon class="icon icon-white" icon="restore"></o-icon> Ricomincia
      </o-button>
    </div>
  </div>
</template>

<script>
import treeObj from '@/configuration/tree.yaml';
import VueMarkdownLite from '@earthtone/vue-markdown-lite'

export default {
  name: 'Wizard',
  components: {
    'vue-markdown-lite': VueMarkdownLite
  },
  data () {
    return {
      activeStep: 0,
      choices: [],
    }
  },
  mounted() {
    this.choices.push(treeObj.root)

    history.pushState({ choices: this.choices, activeStep: this.activeStep }, '')

    window.onpopstate = (event) => {
      if (!event.state) {
        return
      }
      this.choices = event.state.choices
      this.activeStep = event.state.activeStep
    };

  },
  computed: {
    currentChoice() {
      return this.choices[this.choices.length - 1]
    },
    breadcrumbsChoices() {
      let notLeafChoices = this.choices.filter((choice) => {
        return !this.isLeaf(choice)
      })
      return notLeafChoices.splice(0, notLeafChoices.length - 1)
    }
  },
  methods: {
    truncate(text, len) {
      return text.length > len ? text.slice(0, len) + '…' : text;
    },
    restart() {
      window.location.reload();
    },
    goBack() {
      window.history.back()
    },
    isLeaf(node) {
      return typeof(node.content) === 'string'
    },
    selectChoice(currentChoice) {
      this.choices.push(currentChoice)
      this.activeStep = this.choices.length - 1
      history.pushState({ choices: this.choices, activeStep: this.activeStep }, '')
    },
    moveToStep(step) {
      this.activeStep = step
      this.choices = this.choices.slice(0, step + 1)
    }
  }
}
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
  text-align: left;
  margin: 8px;
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
