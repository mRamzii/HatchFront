<template>
    <div>



    </div>
  
</template>

<script>

import store from "@/store"

export default {
    store,
    mounted: function() {
        store.commit('logUser')
    }

}
</script>

<style>

</style>