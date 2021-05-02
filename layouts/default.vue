<template>
  <div class="default__layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/default/Footer.vue";
import Header from "~/components/default/Header.vue";

export default {
  name: "index",
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.default__layout {
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    $default-color-gradient 0%,
    $default-color-background 35%,
    $default-color-background 70%,
    $default-color-background 100%
  );
  color: $default-color-text;
  font-family: Rubik, "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>
