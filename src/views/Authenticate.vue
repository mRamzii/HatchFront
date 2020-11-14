<template>
    <div>
      <div class="col-12 border rounded">

        Your access token: {{getAccessToken}}
      
      </div>
      <router-link to="/dashboard">
            <a
              class="btn btn-warning btn-round col-4"
              >Login</a
            >
      </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Authenticate",
  computed: {
    getAccessToken: function () {
      return this.$router.currentRoute.params.token;
    },
  },
  mounted: function () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })
  },
};
</script>

<style>
</style>
