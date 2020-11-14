<template>
    <div>
      {{ getAccessToken }}
    </div>
</template>

<script>
export default {
  name: "Authenticate",
  computed: {
    getAccessToken: function () {
      return this.$router.currentRoute.params.token;
    },
  },
  mounted: function () {
    this.$emit("startedLoading")
    setTimeout(function() {
        this.$emit("finishedLoading")
    }.bind(this), 200)
  },
};
</script>

<style>
</style>
