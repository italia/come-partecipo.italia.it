import Vue from 'vue';

import { Button, Icon, Config } from '@oruga-ui/oruga';
import '@fontsource/titillium-web';
import '@oruga-ui/oruga/dist/oruga.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';

import BootstrapItaliaIcon from '@/components/BootstrapItaliaIcon.vue';
import vueCustomElement from 'vue-custom-element';
import Wizard from './components/Wizard.vue';

// Vue.config.productionTip = false;

Vue.component('bs-icon', BootstrapItaliaIcon);

Vue.use(vueCustomElement);
Vue.use(Button);
Vue.use(Icon);

Vue.use(Config, {});

Vue.customElement('wizard-italia', Wizard, {
  destroyTimeout: 3000,
  props: [
  ],
  shadow: false,
  shadowCss: '',
});
