<!-- ===========================================================================
@author Mehdi Ramzi
@date 2020/15/11 by Mehdi Ramzi
================================================================================

Home(Login) component
============================================================================ -->

<template>

    <div
        class="container"
    >

        <div
            class="col-md-5 ml-auto mr-auto"
        >

            <card
                type="login"
                plain
            >

                <div
                    slot="header"
                    class="logo-container mt-5"
                >

                    <img
                        class="hatch-logo"
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

                <template
                    slot="raw-content"
                >

                    <div
                        class="card-footer text-center mt-0"
                    >

                        <router-link
                            :to="getAuthenticateUrl"
                        >

                            <button
                                class="btn btn-warning btn-round btn-lg btn-block"
                                v-if="userToken !== ''"
                            >

                                Join the class!

                            </button>

                        </router-link>

                    </div>

                    <div>

                        <h6>

                            <a
                                href="#pablo"
                                class="link footer-link text-info"
                            >
                                Need Help?

                            </a>

                        </h6>

                    </div>

                </template>

            </card>

        </div>

    </div>

</template>

<!-- ======================================================================= -->


<script>
import { Card, Button, FormGroupInput } from "@/components"
import store from "@/store"


//-------------------------------------


export default {
    name: "login-page",
    bodyClass: "login-page",
    components: {
        Card,
        [Button.name]: Button,
        [FormGroupInput.name]: FormGroupInput,
    },
    mounted: function() {
        store.commit("logoutUser")
        if (this.$router.currentRoute.params.invalid === true) {
            this.showError()
        }
    },
    computed: {
        getAuthenticateUrl() {
            return "/authenticate/" + this.userToken
        },
    },
    data() {
        return {
            userToken: "",
            ready: false,
        }
    },
    methods: {
        showError() {
            this.$noty.error("Your access token is invalid, please ask your teacher")
        }
    }
}
</script>


<!-- ======================================================================= -->


<style scoped>

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

.hatch-logo {
    width: 100vw
}
</style>


<!-- ======================================================================= -->
<!-- End of file -->
<!-- ======================================================================= -->
