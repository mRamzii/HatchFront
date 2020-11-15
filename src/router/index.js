import Vue from "vue"
import VueRouter from "vue-router"

import Login from "@/views/Login.vue"
import Dashboard from "@/views/Dashboard.vue"
import Authenticate from "@/views/Authenticate.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Login,
    },
    {
        path: "/authenticate/:token",
        name: "Authenticate",
        component: Authenticate,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
]

const router = new VueRouter({
    mode: "hash",
    base: process.env.VUE_APP_BASEURL,
    routes,
})

export default router
