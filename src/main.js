// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import App1 from "./App";
import { store } from "./store";

Vue.use(MuseUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  aaaa: "a1111",
  store,
  components: { App1 },
  template: "<App1/>"
});
