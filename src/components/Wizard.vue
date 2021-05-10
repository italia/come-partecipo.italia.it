<template>
  <div class="wizard" v-if="currentChoice">
    <o-steps :has-navigation="false" v-model="activeStep" v-if="choices.length > 1">
      <o-step-item
        :value="index" v-for="(madeChoice, index) in choices"
        :key="index"
        :step="index + 1"
        :clickable="index < choices.length - 1"
        :label="index < choices.length - 1 ? choices[index + 1].label : ''">
      </o-step-item>
    </o-steps>
    <h1>{{ currentChoice.question }}</h1>

    <div class="container">
      <div class="choices">
        <div v-for="(possibleChoice, index) in currentChoice.content" :key="possibleChoice.label">
          <o-button class="choice" @click="selectChoice(possibleChoice, index)" :variant="index === replyIndex ? 'primary' : 'outline-primary'">
            {{possibleChoice.label}}
          </o-button>
        </div>
      </div>
      <div class="reply alert alert-success" role="alert" v-if="reply">
        <vue-markdown-lite>{{reply}}</vue-markdown-lite>
      </div>
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
      reply: null,
      replyIndex: -1
    }
  },
  mounted() {
    this.resetReply()
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
        this.resetReply()
        setTimeout(() => {
          this.choices = this.choices.slice(0, newStep + 1)
        }, 300);
      }
    }
  },
  computed: {
    currentChoice() {
      return this.choices[this.choices.length - 1]
    }
  },
  methods: {
    resetReply() {
      this.reply = null
      this.replyIndex = -1
    },
    selectChoice(currentChoice, replyIndex) {
      this.replyIndex = -1
      if (!Array.isArray(currentChoice.content)) {
        this.reply = currentChoice.content
        this.replyIndex = replyIndex
      } else {
        this.choices.push(currentChoice)
        this.resetReply()
        setTimeout(() => {
          this.activeStep = this.choices.length - 1
          history.pushState({ choices: this.choices, activeStep: this.activeStep }, '')
        }, 300);
      }
    }
  }
}
</script>

<style scoped>
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
  margin-top: 0.8rem;
}
.choices {
  margin-top: 4rem;
}
.choice {
  margin-bottom: 0.2rem;
  width: 500px;
}
</style>
