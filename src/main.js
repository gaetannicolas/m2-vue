import Vue from "vue";
import Vuefire from "vuefire";
import App from "./App.vue";

import { hooks } from "vue-hooks";

Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(Vuefire);

new Vue({
  render: h => h(App)
}).$mount("#app");
