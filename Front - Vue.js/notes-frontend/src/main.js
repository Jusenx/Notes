import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Certifique-se de que o router é importado corretamente

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, // Adicione o router à instância Vue
}).$mount("#app");
