<template>
  <div class="container">
    <div class="col-md-5 ml-auto mr-auto">
      <card type="login" plain>
        <div slot="header" class="logo-container">
            <img
              src="https://cdn3.iconfinder.com/data/icons/summer-season-3/64/Artboard_15-512.png"
            />
        </div>

        <fg-input
          class="no-border input-lg"
          addon-left-icon="now-ui-icons objects_key-25"
          placeholder="Access code"
          v-model="userToken"
        >
        </fg-input>

        <template slot="raw-content">
          <div class="card-footer text-center mt-0">
            <router-link :to="getAuthenticateUrl">
            <a
              class="btn btn-warning btn-round btn-lg btn-block"
              >Join the class!</a
            >
            </router-link>
          </div>
          <div class="">
            <h6>
              <a href="#pablo" class="link footer-link text-info">Need Help?</a>
            </h6>
          </div>
        </template>
      </card>
    </div>
  </div>
</template>
<script>

import { Card, Button, FormGroupInput } from "@/components";
import store from "@/store"

export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  mounted: function() {
    store.commit("logoutUser");
  },
  computed: {
    getAuthenticateUrl() {
      return "/authenticate/" + this.userToken;
    },
  },
  data() {
    return {
      userToken: "hello",
      ready: false,
    };
  },
};
</script>
<style>
.content {
  margin-top: 15vh !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
