<template>
  <div class="wizard" v-if="currentChoice">
    <o-steps
      v-if="notLeafChoices.length > 1"
      v-model="activeStep"
      :has-navigation="false"
      class="steps"
    >
    <o-step-item
        :value="0"
        :key="0"
        :step="1"
        :clickable="1"
        :label="choices[0].question">
      </o-step-item>
      <o-step-item
        :value="index + 1" v-for="(madeChoice, index) in notLeafChoices"
        :key="index"
        :step="index + 2"
        :clickable="index < notLeafChoices.length - 1"
        :label="index < notLeafChoices.length - 1 ? notLeafChoices[index + 1].question : ''">
      </o-step-item>
    </o-steps>
    <h1 class="h3">{{ currentChoice.question }}</h1>

    <div class="container">
      <div
        v-if="!isLeaf(currentChoice)"
        class="choices"
      >
        <div v-for="(possibleChoice, index) in currentChoice.content" :key="possibleChoice.label">
          <o-button
            class="choice col-12 col-xl-6 col-lg-6"
            variant="outline-primary"
            @click="selectChoice(possibleChoice, index)"
          >
            {{possibleChoice.label}}
          </o-button>
        </div>
      </div>
      <div v-else>
        <h1>{{ currentChoice.label }}</h1>
        <div class="reply col-12 col-xl-6 col-lg-6 mx-auto">
          <vue-markdown-lite>{{ currentChoice.content }}</vue-markdown-lite>
        </div>
      </div>

      <o-button
        v-if="activeStep > 0"
        class="choice col-12 col-xl-6 col-lg-6"
        variant="secondary"
        @click="goBack()"
      >
        ⇦ Indietro
      </o-button>
      <o-button
        v-if="isLeaf(currentChoice)"
        class="choice col-12 col-xl-6 col-lg-6"
        variant="primary"
        @click="restart()"
      >
        Ricomincia
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
  watch: {
    activeStep: function (newStep, oldStep) {
      if (newStep < oldStep) {
        setTimeout(() => {
          this.choices = this.choices.slice(0, newStep + 1)
        }, 300);
      }
    }
  },
  computed: {
    currentChoice() {
      return this.choices[this.choices.length - 1]
    },
    notLeafChoices() {
      return this.choices.filter((choice) => {
        return !this.isLeaf(choice)
      })
    }
  },
  methods: {
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
      setTimeout(() => {
        this.activeStep = this.choices.length - 1
        history.pushState({ choices: this.choices, activeStep: this.activeStep }, '')
      }, 300);
    }
  }
}
</script>

<style scoped>
.steps {
  margin-bottom: 4rem;
}
.reply {
  margin-top: 0.8rem;
}
.choices {
  margin-top: 2rem;
}
.choice {
  text-align: left;
  margin: 8px;
}
.reply {
  background-color: #dce9f5;
}
</style>
