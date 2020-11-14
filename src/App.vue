<template>
  <div id="app">
    <div class="page-header clear-filter" filter-color="orange">
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
      <main-footer
        :showDock="showDock"
      >
      </main-footer>
    </div>
  </div>
</template>

<script>
import MainFooter from "@/layout/MainFooter";

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
    };
  },
  computed: {
    showDock: function() {
      return store.state.isUserLoggedIn
    }
  },
  methods: {
    toggleLoading(boolean) {
      this.isLoading = boolean;
    },
  },
};
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
</style>
