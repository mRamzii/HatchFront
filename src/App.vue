<template>
    <div id="app">
        <div class="page-header clear-filter" filter-color="orange">
            <template v-if="isUserLoggedIn">
                <div class="d-flex justify-content-start row">
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/education-239/64/student-people-profile-avatar-school-boy-512.png"
                        height="80px"
                        class="mt-2 ml-5"
                        @mouseover="hoverOnAvatar"
                    />
                </div>
                <div class="d-flex ml-3">
                    Firstname Surname
                </div>
            </template>
            <div
                class="page-header-image"
                style="background-image: url('https://i.redd.it/eklxnrkel8t41.jpg')"
            ></div>

            <div class="content">
                <router-view
                    @startedLoading="toggleLoading(true)"
                    @finishedLoading="toggleLoading(false)"
                />
            </div>
            <main-footer :showDock="isUserLoggedIn"> </main-footer>
        </div>
    </div>
</template>

<script>
import MainFooter from "@/layout/MainFooter"
import store from "@/store"

export default {
    name: "App",
    store,
    components: {
        MainFooter,
    },
    data() {
        return {
            isLoading: false,
            hovering: false,
        }
    },
    computed: {
        isUserLoggedIn: function() {
            return store.state.isUserLoggedIn
        },
    },
    methods: {
        toggleLoading(boolean) {
            this.isLoading = boolean
        },
        hoverOnAvatar() {
            this.hovering = true
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.content {
    margin: 0 !important;
}
</style>
