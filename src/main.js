import Vue from 'vue';

import { Button, Icon, Config } from '@oruga-ui/oruga';
import '@fontsource/titillium-web';
import '@oruga-ui/oruga/dist/oruga.css';
import 'wizard-italia-component/dist/wizard-italia-component.css';

import BootstrapItaliaIcon from './components/BootstrapItaliaIcon.vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.component('BsIcon', BootstrapItaliaIcon);

Vue.use(Button);
Vue.use(Icon);

Vue.use(Config, {
  iconPack: 'bs',
  iconComponent: 'bs-icon',
  statusIcon: true,
  button: {
    rootClass: 'btn wizard-btn',
    outlinedClass: 'btn-outline-',
    disabledClass: 'btn-disabled',
    // Apply variant when the element is not outlined
    variantClass: (variant, context) => (!context.props.outlined ? `btn-${variant}` : ''),
  },
  icon: {
    rootClass: 'icon icon-white',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
