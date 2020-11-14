<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('https://i.redd.it/eklxnrkel8t41.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <transition name="fade">
                <img
                  v-if="ready"
                  src="https://cdn3.iconfinder.com/data/icons/summer-season-3/64/Artboard_15-512.png"
                />
              </transition>
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons objects_key-25"
              placeholder="Access code"
              v-model="user_token"
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center mt-0">
                <a
                  :href="user_token"
                  class="btn btn-warning btn-round btn-lg btn-block"
                  >Join the class!</a
                >
              </div>
              <div class="">
                <h6>
                  <a href="#pablo" class="link footer-link text-info"
                    >Need Help?</a
                  >
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import MainFooter from "@/layout/MainFooter";
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  mounted: function () {
    setTimeout(
      function () {
        this.ready = true
      }.bind(this),
      50
    );
  },
  data() {
    return {
      user_token: "hello",
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
