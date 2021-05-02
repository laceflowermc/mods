<template>
  <div id="hero">
    <div class="left">
      <h1 class="title">Blake's Mods</h1>
      <h2 class="subtitle">The home of BlakeBr0's Minecraft mods</h2>
      <button class="cta" type="button" @click="onClickCTA">
        Check 'em out!
      </button>
    </div>
    <div class="right">
      <Carousel
        class="carousel"
        autoplay
        loop
        :per-page="1"
        :autoplay-timeout="5000"
        :pagination-enabled="false"
      >
        <Slide>
          <img src="/img/web_home_1.png" width="600" height="300" alt="" />
        </Slide>
        <Slide>
          <img src="/img/web_home_2.png" width="600" height="300" alt="" />
        </Slide>
        <Slide>
          <img src="/img/web_home_3.png" width="600" height="300" alt="" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";

export default {
  name: "Hero",
  components: {
    Carousel,
    Slide
  },
  methods: {
    onClickCTA() {
      document.getElementById("mods").scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

#hero {
  display: flex;
  max-width: 100%;
  height: 500px;
  padding-top: $default-header-height;
  align-items: center;

  .left {
    width: 50%;

    .title {
      font-size: 4em;
    }

    .subtitle {
      font-size: 1.5em;
    }

    .cta {
      padding: 10px 30px;
      margin-top: 25px;
      color: white;
      background-color: $default-color-secondary;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.25s;

      &:hover {
        background-color: $default-color-secondary-accent;
      }
    }
  }

  .right {
    width: 50%;

    .carousel {
      height: 300px;
      border-radius: 16px;
      box-shadow: rgba(0, 0, 0, 0.15) 0 2px 12px;
      overflow: hidden;
    }
  }
}
</style>
