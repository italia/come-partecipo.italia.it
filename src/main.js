import Vue from 'vue'
import App from './App.vue'


import {Button, Icon, Config} from '@oruga-ui/oruga'
import "@fontsource/titillium-web"
import '@oruga-ui/oruga/dist/oruga.css'
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'

import BootstrapItaliaIcon from "@/components/BootstrapItaliaIcon.vue";


Vue.config.productionTip = false

Vue.component('bs-icon', BootstrapItaliaIcon)

Vue.use(Button)
Vue.use(Icon)

Vue.use(Config, {
  iconPack: 'bs',
  iconComponent: 'bs-icon',
  statusIcon: true,
  button: {
    rootClass: 'btn',
    outlinedClass: 'btn-outline-',
    disabledClass: 'btn-disabled',
    variantClass: (variant, context) => { // Apply variant when the element is not outlined
      if (!context.props.outlined) {
        return `btn-${variant}`
      }
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
