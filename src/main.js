import Vue from "vue";
import Vuefire from "vuefire";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vuefire);

new Vue({
  render: h => h(App)
}).$mount("#app");
