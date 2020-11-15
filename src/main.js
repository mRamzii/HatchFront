import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "bootstrap/dist/css/bootstrap.css"
import "@/assets/scss/now-ui-kit.scss"
import "@/assets/demo/demo.css"

Vue.config.productionTip = false

/* eslint-disable-line no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
