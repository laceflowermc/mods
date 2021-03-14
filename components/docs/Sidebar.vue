<template>
  <div class="docs__sidebar">
    <div
      v-for="category in categories"
      class="docs__sidebar-category"
      :key="category"
    >
      <h4 class="docs__sidebar-category-title">{{ category }}</h4>
      <div
        v-for="document in documents[category]"
        class="docs__sidebar-link"
        :key="document.slug"
      >
        <nuxt-link :to="document.path">{{ document.title }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sidebar",
  computed: {
    documents() {
      return this.$store.state.documents;
    },
    categories() {
      return Object.keys(this.$store.state.documents);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.docs__sidebar {
  position: sticky;
  flex: 0 0 220px;
  max-height: calc(100vh - #{$docs-header-height + $docs-footer-height + 2px});
  top: $docs-header-height + 1px;
  padding: $docs-spacing $docs-spacing $docs-spacing 0;
  overflow-y: auto;

  &-category {
    &-title {
      text-transform: uppercase;
      font-weight: bold;
      color: gray;
      margin-bottom: 5px;
    }
  }

  &-link {
    a {
      color: white;

      &:hover {
        color: darken(white, 20);
      }
    }
  }
}
</style>
