import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

import App from "./App.vue";
import router from "./router";

Vue.use(Vuesax, {
  colors: {
    primary: "#315DC4",
    success: "rgb(23, 201, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 130, 0)",
    dark: "rgb(36, 33, 69)",
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
