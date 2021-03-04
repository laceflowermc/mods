<template>
  <div class="docs__layout">
    <Header />
    <div class="docs__body">
      <Sidebar />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "~/components/layout/docs/Header.vue";
import Footer from "~/components/layout/docs/Footer.vue";
import Sidebar from "~/components/layout/docs/Sidebar.vue";

export default Vue.extend({
  name: "docs",
  components: {
    Header,
    Footer,
    Sidebar
  }
});
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.docs__layout {
  background: $docs-color-primary;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .docs__body {
    display: flex;
    flex: 1 1 auto;
    width: $docs-container-width;
    margin: 0 auto;
  }
}
</style>
