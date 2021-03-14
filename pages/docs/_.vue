<template>
  <div class="docs__content">
    <div class="docs__content-section">
      <nuxt-content :document="page" />
      <Pagination :previous="previous" :next="next" />
    </div>
    <div class="docs__toc">
      <h3 class="docs__toc-title">On This Page</h3>
      <div
        v-for="item in page.toc"
        class="docs__toc-link"
        :class="{ 'level-2': item.depth === 2, 'level-3': item.depth === 3 }"
        :key="item.id"
      >
        <nuxt-link :to="`#${item.id}`">
          {{ item.text }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IContentDocument } from "@nuxt/content/types/content";

import Pagination from "~/components/docs/Pagination.vue";

export default Vue.extend({
  name: "DocsPage",
  layout: "docs",
  components: {
    Pagination
  },
  data() {
    return {
      page: {},
      previous: null,
      next: null
    };
  },
  async asyncData({ $content, params, error }) {
    const path = `/docs/${params.pathMatch || "index"}`;
    const [page] = (await $content("docs", { deep: true })
      .where({ path })
      .fetch()) as IContentDocument[];

    if (!page) {
      return error({ statusCode: 404, message: "Page not found." });
    }

    const [previous, next] = (await $content("docs", { deep: true })
      .only(["title", "slug"])
      .sortBy("position", "asc")
      .surround(page.path)
      .fetch()) as [IContentDocument, IContentDocument];

    return {
      page,
      previous,
      next
    };
  }
});
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.docs__content {
  display: flex;

  &-section {
    border-left: 1px solid $docs-color-primary-accent;
    border-right: 1px solid $docs-color-primary-accent;

    .nuxt-content-container {
      padding: $docs-spacing;
      margin-bottom: -15px;

      &::v-deep .nuxt-content {
        * {
          margin-bottom: 15px;
        }
      }
    }
  }

  .docs__toc {
    position: sticky;
    flex: 0 0 220px;
    max-height: calc(
      100vh - #{$docs-header-height + $docs-footer-height + 2px}
    );
    top: $docs-header-height + 1px;
    padding: $docs-spacing 0 $docs-spacing $docs-spacing;
    overflow-y: auto;

    &-title {
      text-transform: uppercase;
      font-weight: bold;
      color: gray;
      margin-bottom: 5px;
    }

    &-link {
      display: flex;
      width: 100%;
      text-decoration: none;

      &.level-2 {
        padding-left: 10px;
      }

      &.level-3 {
        padding-left: 20px;
      }

      a {
        color: white;

        &:hover {
          color: darken(white, 20);
        }
      }
    }
  }
}
</style>
