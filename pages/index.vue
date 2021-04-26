<template>
  <div class="container">
    <Hero />
    <SellingPoints />
    <Mods />
    <Usage />
  </div>
</template>

<script>
import Hero from "~/components/default/Hero.vue";
import Mods from "~/components/default/Mods.vue";
import SellingPoints from "~/components/default/SellingPoints.vue";
import Usage from "~/components/default/Usage.vue";

export default {
  name: "index",
  components: {
    Hero,
    Mods,
    SellingPoints,
    Usage
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables.scss";

.container {
  display: flex;
  width: $default-container-width;
  margin: 0 auto;
  flex-direction: column;

  & > * {
    margin-bottom: 60px;
  }
}
</style>
