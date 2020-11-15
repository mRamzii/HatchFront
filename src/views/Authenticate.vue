<!-- ===========================================================================
@author Mehdi Ramzi
@date 2020/15/11 by Mehdi Ramzi
================================================================================

Authentication component
============================================================================ -->

<template>

    <div class="container-fluid">

        <Loading
            v-if="loading"
        />

        <template
            v-if="!loading"
        >

            <div
                v-if="isTokenValid"
            >

                Redirecting...

            </div>

        </template>

    </div>

</template>


<!-- ======================================================================= -->


<script>

import axios from "axios"

import Loading from "@/components/Utils/Loading.vue"

//-------------------------------------

export default {
    name: "Authenticate",
    data() {
        return {
            isTokenValid: false,
            loading: true,
            user: []
        }
    },
    computed: {
        getAccessToken: function() {
            return this.$router.currentRoute.params.token
        },
    },
    mounted: function() {
        let request = {
            token: this.$router.currentRoute.params.token,
        }

        axios
            .post(process.env.VUE_APP_APIURL + "auth/authenticate/", request, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "application/json",
                },
            })
            .then((response) => {
                if (response.data.status === "success") {
                    this.isTokenValid = true
                    this.user = response.data
                } else {
                    this.$router.push({ name: "Home", params: { invalid: true } })
                    this.isTokenValid = false
                }
            })
            .catch((e) => {
                this.$router.push({ name: "Home", params: { invalid: true } })
            })
            .finally(() => {
                this.loading = false
            })
    },
    components: {
        Loading
    }
}
</script>


<!-- ======================================================================= -->


<style scoped>

</style>


<!-- ======================================================================= -->
<!-- End of file -->
<!-- ======================================================================= -->
