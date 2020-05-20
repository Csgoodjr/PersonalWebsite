import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Import Firebase
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";
// Import Bootstrap
import { BoostrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BoostrapVue);
Vue.use(IconsPlugin);
Vue.use(firestorePlugin)

export const db = firebase
  .initializeApp({ projectId:"personal-site-63885"})
  .firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
