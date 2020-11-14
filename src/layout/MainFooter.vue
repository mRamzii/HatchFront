<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
  <Dock 
    v-if="showDock"
  />
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://www.vuhackathon.lt/">
              Edtech Hackathon 2020
            </a>
          </li>
          <li>
            <a href="">
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Designed by
        <a href="" target="_blank" rel="noopener"
          >Toto</a
        >. Coded by
        <a href="" target="_blank" rel="noopener"
          >ShellScript</a
        >
        and
        <a href="" target="_blank" rel="noopener"
          >Timd</a
        >.
      </div>
    </div>
  </footer>
</template>
<script>

import Dock from "@/components/Hatch/Dock.vue"


export default {


  props: {
    backgroundColor: String,
    type: String,
    showDock: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  components: {
    Dock
  }
};
</script>
<style></style>
