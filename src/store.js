import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isUserLoggedIn: false
    },
    mutations: {
        logUser(state) {
            state.isUserLoggedIn = true
        },
        logoutUser(state) {
            state.isUserLoggedIn = false
        }
    }
})
