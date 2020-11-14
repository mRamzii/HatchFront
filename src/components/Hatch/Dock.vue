<template>
  <div>
    <div id="dock-container">
      <div 
      id="dock"
      @mouseover="addPrevClass($event)"
      >
        <ul>
          <li>
            <span>My avatar</span>
            <img
                src="https://i.pinimg.com/originals/3c/ad/6d/3cad6d2712889a03959d7fa4d2c084b9.png"
            />
          </li>
          <li>
            <span>Schedule</span
            >
            <img
                src="https://img2.pngio.com/alarm-clock-cartoon-cartoon-alarm-clock-png-download-20832083-cartoon-alarm-clock-png-2083_2083.png"
            />
          </li>
          <li>
            <span>Chat</span
            >
            <img
                src="https://cdn0.iconfinder.com/data/icons/product-management-and-global-business-3/512/194_Chat_chatting_conversation_dialogue-512.png"
            />
          </li>
          <li>
            <span>Ask for help</span
            >
            <img
                src="https://icons.iconarchive.com/icons/vexels/office/1024/bulb-icon.png"
            />
          </li>
        </ul>
        <div class="base"></div>
      </div>
    </div>

    <!-- compatibility -->
    <p
      id="ua-string"
      style="margin:2em 0; color:#ddd; font-style:italic; font-size:.8em"
    ></p>
  </div>
</template>

<script>
export default {
  methods: {
    addPrevClass: function(e) {
      var target = e.target;
      if (target.getAttribute("src")) {
        // check if it is img
        var li = target.parentNode.parentNode;
        var prevLi = li.previousElementSibling;
        if (prevLi) {
          prevLi.className = "prev";
        }

        target.addEventListener(
          "mouseout",
          function() {
            if (prevLi) {
              prevLi.removeAttribute("class");
            }
          },
          false
        );
      }
    },
    startHover: function() {
      document.getElementById('dock').addEventListener('mouseover', this.addPrevClas(), false);
    }
  },
};
</script>

<style scoped>
#dock-container {
  position: fixed;
  top: calc(100vh - 130px);
  right: 3vw;
  text-align: center;
  width: 100%;
}
#dock {
  position: relative;
  display: inline-block;
  -webkit-perspective: 400;
  -moz-perspective: 400;
}
#dock .base {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  z-index: -10;
  background-color: #888;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#333),
    to(#ccc)
  );
  background-image: -webkit-linear-gradient(top, #333, #999);
  background-image: -moz-linear-gradient(
    top,
    #333,
    #999
  ); /* Gradient works on FF 3.6+ */
  opacity: 0.5;
  border-bottom: 2px #aaa solid;
  -webkit-transform-origin: 50% 100%;
  -webkit-transform: rotateX(55deg); /* 3d - works on webkit only */
  -moz-transform-origin: 50% 100%;
  -moz-transform: rotateX(55deg); /* not supported on current 3.7 */
  -o-transform-origin: 50% 100%;
  -o-transform: rotateX(55deg); /* not supported on current 10.6 */
}
#dock ul {
  font-size: 14px;
  padding: 0 30px;
  margin: 0;
}
#dock li {
  list-style-type: none;
  display: inline-block;
  position: relative;
}
#dock li span {
  display: none;
  position: absolute;
  bottom: 140px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 4px 0;
  border-radius: 12px; /* webkit nightly */
  -webkit-border-radius: 12px; /* for safari */
  -moz-border-radius: 12px;
}
#dock li:hover span {
  display: block;
}
#dock li img {
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
  -webkit-box-reflect: below 2px;
  -webkit-box-reflect: below 2px -webkit-linear-gradient(top, transparent, rgba(255, 255, 255, 0.3));
  -webkit-transition: all 0.3s;
  -webkit-transform-origin: 50% 100%;
  -moz-transition: all 0.4s;
  -moz-transform-origin: 50% 100%;
  -o-transition: all 0.3s;
  -o-transform-origin: 50% 100%;
}
#dock li:hover img {
  -webkit-transform: scale(2);
  -moz-transform: scale(2);
  -o-transform: scale(2);
  margin: 0 2em 10px;
}

/* one element after and element before (with JS)*/
#dock li:hover + li img,
#dock li.prev img {
  -webkit-transform: scale(1.4);
  -moz-transform: scale(1.4);
  -o-transform: scale(1.4);
  margin: 0 1.4em 10px;
}
</style>
