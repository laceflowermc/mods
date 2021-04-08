<template>
  <div class="docs">
    <div class="content">
      <nuxt-content :document="page" />
      <Pagination :previous="previous" :next="next" />
    </div>
    <div class="toc">
      <h4 class="toc-title" v-if="!!page.toc.length">On This Page</h4>
      <div
        v-for="item in page.toc"
        class="toc-link"
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

<script>
import Pagination from "~/components/docs/Pagination.vue";

export default {
  name: "docs",
  layout: "docs",
  components: {
    Pagination
  },
  head() {
    return {
      title: this.page.category
        ? `${this.page.title} · ${this.page.category}`
        : this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
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
    const [page] = await $content("docs", { deep: true })
      .where({ path })
      .fetch();

    if (!page) {
      return error({ statusCode: 404, message: "Page not found." });
    }

    const [previous, next] = await $content("docs", { deep: true })
      .only(["title", "slug", "category"])
      .sortBy("position", "asc")
      .surround(page.path)
      .fetch();

    return {
      page,
      previous,
      next
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.docs {
  display: flex;
  width: 100%;

  .content {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid $docs-color-primary-accent;
    border-right: 1px solid $docs-color-primary-accent;

    .nuxt-content-container {
      padding: $docs-spacing;
      margin-bottom: -15px;

      &::v-deep .nuxt-content {
        * {
          margin-bottom: 15px;
        }

        a {
          color: $docs-color-secondary;

          &:hover {
            color: $docs-color-secondary-accent;
          }
        }

        h2,
        h3 {
          .icon-link {
            position: absolute;
            opacity: 0;
            margin-left: -20px;
            padding-right: 10px;
            color: $docs-color-secondary;

            &::before {
              content: "#";
            }

            &:hover {
              color: $docs-color-secondary-accent;
            }
          }

          &:hover {
            .icon-link {
              opacity: 1;
            }
          }
        }

        :target::before {
          content: "";
          display: block;
          height: $docs-header-height;
          margin: -$docs-header-height 0 0;
        }
      }
    }
  }

  .toc {
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
