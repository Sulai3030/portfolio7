import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// src/plugins/vuetify.js

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
    breakpoint: {
      mobileBreakpoint: "sm", // This is equivalent to a value of 960
    },
  },
});
