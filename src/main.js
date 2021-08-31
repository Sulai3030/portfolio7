import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import MenuIcon from "vue-material-design-icons/Menu.vue";

Vue.config.productionTip = false;

Vue.component("menu-icon", MenuIcon);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
