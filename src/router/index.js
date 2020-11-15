import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex'

import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue"

Vue.use(VueRouter);
Vue.use(Vuex);


const routes = [{
        path: "/",
        name: "Home",
        component: Login
    },
    {
        path: "/authenticate/:token",
        name: "Authenticate",
        component: () =>
            import ( /* webpackChunkName: "about" */ "@/views/Authenticate.vue")
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    }
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.VUE_APP_BASEURL,
    routes
});

export default router;