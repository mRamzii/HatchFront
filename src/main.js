import Vue from "vue"
import Vuex from "vuex"

import VueNoty from "vuejs-noty"

import App from "./App.vue"
import router from "./router"
import store from "./store"

import "bootstrap/dist/css/bootstrap.css"
import "@/assets/scss/now-ui-kit.scss"
import "vuejs-noty/dist/vuejs-noty.css"

Vue.config.productionTip = false

/* eslint-disable-line no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")

Vue.use(Vuex)
Vue.use(VueNoty)
