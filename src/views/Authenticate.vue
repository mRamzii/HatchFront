<!-- ===========================================================================
@author Mehdi Ramzi
@date 2020/15/11 by Mehdi Ramzi
================================================================================

Authentication component
============================================================================ -->

<template>

    <div>

        <div class="col-12 border rounded">

            Your access token: {{ getAccessToken }}

        </div>

        <router-link to="/dashboard">

            <a class="btn btn-warning btn-round col-4">

                Login

            </a>

        </router-link>

    </div>

</template>


<!-- ======================================================================= -->


<script>

import axios from "axios"


//-------------------------------------


export default {
    name: "Authenticate",
    computed: {
        getAccessToken: function () {
            return this.$router.currentRoute.params.token
        },
    },
    mounted: function () {
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
                // JSON responses are automatically parsed.
                console.log(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    },
}
</script>


<!-- ======================================================================= -->


<style>
</style>


<!-- ======================================================================= -->
<!-- End of file -->
<!-- ======================================================================= -->
