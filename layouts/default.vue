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
  background-color: $default-color-background;
  min-height: 100vh;
  font-family: Poppins, "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>
