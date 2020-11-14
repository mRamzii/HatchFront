<template>
    <div>
      {{ getAccessToken }}
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
