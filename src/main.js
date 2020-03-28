import Vue from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue";
// import Rockets from "./views/Rockets.vue";

Vue.component("home", Home);
// Vue.component("rockets", Rockets);

new Vue({
  el: "#app",
  render: h => h(App)
});
