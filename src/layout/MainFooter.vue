<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
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
        <a href="https://binarcode.com" target="_blank" rel="noopener"
          >ShellScript</a
        >
        and
        <a href="https://www.creative-tim.com" target="_blank" rel="noopener"
          >Timd</a
        >.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
