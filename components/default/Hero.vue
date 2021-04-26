<template>
  <div id="hero">
    <div class="left">
      <h1 class="title">Blake's Mods</h1>
      <h2 class="subtitle">The home of BlakeBr0's Minecraft mods</h2>
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
        <Slide> <img src="https://via.placeholder.com/600x300" /> </Slide>
        <Slide> <img src="https://via.placeholder.com/600x300" /> </Slide>
        <Slide> <img src="https://via.placeholder.com/600x300" /> </Slide>
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
  }

  .right {
    width: 50%;

    .carousel {
      height: 300px;
      border: 1px solid lightgray;
      border-radius: 16px;
      box-shadow: rgba(0, 0, 0, 0.15) 0 2px 12px;
      overflow: hidden;
    }
  }
}
</style>
