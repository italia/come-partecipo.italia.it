import Vue from 'vue';

import { Button, Icon, Config } from '@oruga-ui/oruga';
import '@fontsource/titillium-web';
import '@oruga-ui/oruga/dist/oruga.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';

import BootstrapItaliaIcon from '@/components/BootstrapItaliaIcon.vue';
import Wizard from './components/Wizard.vue'

import vueCustomElement from 'vue-custom-element'


//Vue.config.productionTip = false;

Vue.component('bs-icon', BootstrapItaliaIcon);

Vue.use(vueCustomElement);
Vue.use(Button);
Vue.use(Icon);

Vue.use(Config, {});


Vue.customElement('wizard-italia', Wizard, {
  // 'constructorCallback' can be triggered multiple times when e.g. vue-router is used
  constructorCallback() {
    console.info('constructorCallback', this);
  },

  // element is mounted/inserted into document
  connectedCallback() {
    console.info('connectedCallback', this.styleConfig);
  },

  // element is removed from document
  disconnectedCallback() {
    console.warn('disconnectedCallback', this);
  },

  // one of element's attributes (Vue instance props) is changed
  attributeChangedCallback(name, oldValue, value) {
    console.info('attributeChangedCallback', name, oldValue, value);
  },

  // Vue instance is created
  vueInstanceCreatedCallback() {
    console.info('vueInstanceCreatedCallback', this.styleConfig);
  },

  // in case of using vue-custom-element with modals, we destroy  it after defined timeout. Use "null" value if you want to manually "$destroy" it.
  destroyTimeout: 3000,

  // only needed when using lazy-loading - 'props' are not accessible on Custom Element registration so we have to provide them
  props: [
  ],

  // you can set shadow root for element. Only works if native implementation is available.
  shadow: false,

  // you can set CSS that will be available in Shadow DOM.
  shadowCss: ''
});
