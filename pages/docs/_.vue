<template>
  <div class="docs__content">
    <nuxt-content :document="page" />
    <div class="docs__toc">
      <h2>On This Page</h2>
      <a v-for="item in page.toc" class="docs__toc-item" :href="`#${item.id}`">
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "docs-content",
  layout: "docs",
  data() {
    return {
      page: {}
    };
  },
  async asyncData({ $content, params }) {
    const page = await $content("docs", params.pathMatch).fetch();

    return {
      page
    };
  }
});
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.docs__content {
  display: flex;

  .nuxt-content-container {
    width: 75%;
    padding: $docs-spacing;
    border-left: 1px solid $docs-color-dark-primary-accent;
    border-right: 1px solid $docs-color-dark-primary-accent;
  }

  .docs__toc {
    position: sticky;
    flex: 0 0 25%;
    max-height: calc(
      100vh - #{$docs-header-height + $docs-footer-height + 1px}
    );
    top: $docs-header-height + 1px;
    padding: $docs-spacing;
    overflow-y: auto;

    &-item {
      display: flex;
      width: 100%;
      text-decoration: none;
    }
  }
}
</style>
