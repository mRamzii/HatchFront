<template>
  <div class="buddy">
    <lottie
      :options="defaultOptions"
      :height="300"
      :width="300"
      v-on:animCreated="handleAnimation"
      class="bird"
    />
    <transition name="fade">
    <div class="message" v-if="doneWithAnimation">
        Hey, I'm Buddy !
    </div>
    </transition>
    <transition name="fade">
        <img v-if="doneWithAnimation" class="bubble" src="https://i.pinimg.com/originals/35/1a/be/351abe5951e44ce84e27c8a5e9842a3f.png" width="270px">
    </transition>
  </div>
</template>

<script>
import store from "@/store";

import Lottie from 'vue-lottie';
import * as animationData from "@/assets/animations/egg_hatch.json";

export default {
  store,
  mounted: function() {
    store.commit("logUser");
  },
  components: {
    'lottie': Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default, loop: false },
      animationSpeed: 1,
      anim: null,
      doneWithAnimation: false
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    this.anim.addEventListener('complete', () => { this.doneWithAnimation = true })
    },
    play: function () {
        this.anim.play();
    },
  },
};
</script>

<style scoped>
.buddy {
    position: relative;
}

.bird {
    position:absolute;
    bottom:15;
    left:0;
}

.message {
    position: absolute;
    margin-left: 32vh;
    color: black;
    padding-top: 5vh;
}

.bubble {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 11vw;
    color: black;
    z-index: -1 !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


