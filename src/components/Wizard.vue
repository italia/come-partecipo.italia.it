<template>
  <div class="wizard" v-if="currentChoice">
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <o-steps :has-navigation="false" v-model="activeStep">
      <o-step-item :value="index" v-for="(madeChoice, index) in choices" :key="index" :label="madeChoice.label">
      </o-step-item>
    </o-steps>
    <div class="question">
      <h1>{{ currentChoice.question }}</h1>
    </div>
    <div class="choices">
      <div class="choice-container" v-for="possibleChoice in currentChoice.content" :key="possibleChoice.label">
        <o-button @click="selectChoice(possibleChoice)" :variant="possibleChoice.content === reply ? 'primary' : 'outlined'">
          {{possibleChoice.label}}
        </o-button>
      </div>
    </div>
    <div class="reply" v-if="reply">
      <vue-markdown-lite>{{reply}}</vue-markdown-lite>
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
  props: {
    msg: String
  },
  data () {
    return {
      activeStep: 0,
      choices: [],
      currentChoice: null,
      reply: null
    }
  },
  mounted() {
    this.setChoice(treeObj.root)
    this.choices.push(this.currentChoice)
  },
  watch: {
    activeStep: function (newStep, oldStep) {
      if (newStep < oldStep) {
        this.setChoice(this.choices[newStep])
        this.choices = this.choices.slice(0, newStep + 1)
      }
    }
  },
  methods: {
    setChoice(choice) {
      this.currentChoice = choice
      this.reply = null
    },
    selectChoice(currentChoice) {
      if (!Array.isArray(currentChoice.content)) {
        this.reply = currentChoice.content
      } else {
        this.choices.push(currentChoice)
        this.activeStep = this.choices.length - 1
        this.setChoice(currentChoice)
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.reply {
  background: green;
  color: white;
  padding: 0.8rem;
  margin-top: 0.5rem;
}
</style>
