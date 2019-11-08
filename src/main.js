import Vue from "vue";
import App from "./App.vue";
import VueFire from "vuefire";
import "./services/firebase";

Vue.use(VueFire);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
