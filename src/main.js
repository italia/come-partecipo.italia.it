import Vue from 'vue'
import App from './App.vue'


import {Button, Steps, Config} from '@oruga-ui/oruga'
import "@fontsource/titillium-web"
import '@oruga-ui/oruga/dist/oruga.css'
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'
import './styles/global.css'


Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Steps)

Vue.use(Config, {
  button: {
    rootClass: 'btn',
    outlinedClass: 'btn-outline-',
    disabledClass: 'btn-disabled',
    variantClass: (variant, context) => { // Apply variant when the element is not outlined
      if (!context.props.outlined) {
        return `btn-${variant}`
      }
    }
  },
  steps: {
    itemHeaderActiveClass: 'steps-nav-item-active',
    itemHeaderPreviousClass: 'steps-nav-item-previous',
    stepMarkerClass: {
      override: true,
      class: 'btn btn-primary step-marker',
    },
    stepDividerClass: 'step-divider',
    stepLinkClass: 'step-link',
    stepLinkClickableClass: 'step-link-clickable'
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
