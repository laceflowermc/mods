<template>
  <div class="docs__search-results">
    <a v-for="result in results">
      {{ result }}
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IContentDocument } from "@nuxt/content/types/content";

export default Vue.extend({
  name: "SearchResults",
  props: {
    search: String
  },
  data() {
    return {
      results: [] as any[]
    };
  },
  watch: {
    async search(value) {
      if (!value) {
        this.results = [];
        return;
      }

      this.results = (await this.$content("docs", { deep: true })
        .only(["title", "slug"])
        .sortBy("createdAt", "asc")
        .limit(12)
        .search(value)
        .fetch()) as IContentDocument[];
    }
  }
});
</script>

<style lang="scss" scoped>
.docs__search-results {
  display: flex;
  position: absolute;
  bottom: -20px;
}
</style>
