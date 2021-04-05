<template>
  <div class="pagination">
    <nuxt-link v-if="previous" class="left" :to="previous.path">
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
      {{ previous.title }}
    </nuxt-link>
    <nuxt-link v-if="next" class="right" :to="next.path">
      {{ next.title }}
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    previous: Object,
    next: Object
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.pagination {
  display: flex;
  height: $docs-pagination-height;
  justify-content: space-between;
  align-items: center;
  padding: 0 $docs-spacing;
  border-top: 1px solid $docs-color-primary-accent;

  .left {
    width: 100%;
    color: $docs-color-text;
    padding: 10px;
    border: 1px solid $docs-color-secondary-accent;

    .fa-arrow-left {
      margin-right: 10px;
    }
  }

  .right {
    width: 100%;
    text-align: right;
    color: $docs-color-text;

    .fa-arrow-right {
      margin-left: 10px;
    }
  }
}
</style>
