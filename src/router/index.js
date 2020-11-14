import Vue from "vue";
import VueRouter from "vue-router";


import Login from "@/views/Login.vue";
import Authenticate from "@/views/Authenticate.vue"

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
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;