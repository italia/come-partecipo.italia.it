import Vue from 'vue'
import App from './App.vue'


import {Button, Steps} from '@oruga-ui/oruga'
import '@oruga-ui/oruga/dist/oruga-full.css'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Steps)

new Vue({
  render: h => h(App),
}).$mount('#app')
