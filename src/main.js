import Vue from "vue"
import App from "./App.vue"
import "amfe-flexible"
import "./style/normalize.css"
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
