import Vue from "vue";
import VueRouter from "vue-router";


import Login from "@/views/Login.vue";
import Authenticate from "@/views/Authenticate.vue"
import Dashboard from "@/views/Dashboard.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Login
    },
    {
        path: "/authenticate/:token",
        name: "Authenticate",
        component: Authenticate
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;