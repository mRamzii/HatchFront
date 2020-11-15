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
                    class="logo-container"
                >

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
                                :disabled="userToken === ''"
                                @click="verifyUserInput"
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
        verifyUserInput() {
            if (this.userToken !== "") {

            } else {

            }
        }
    }
}
</script>


<!-- ======================================================================= -->


<style scoped>
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

<!-- ======================================================================= -->
<!-- End of file -->
<!-- ======================================================================= -->
