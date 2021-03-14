<template>
  <div class="docs__pagination">
    <nuxt-link
      v-if="previous"
      class="docs__pagination-left"
      :to="previous.path"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
      {{ previous.title }}
    </nuxt-link>
    <nuxt-link v-if="next" class="docs__pagination-right" :to="next.path">
      {{ next.title }}
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Pagination",
  props: {
    previous: Object,
    next: Object
  }
});
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.docs__pagination {
  display: flex;
  justify-content: space-between;
  padding: 0 $docs-spacing $docs-spacing;

  &-left {
    width: 50%;
    justify-content: flex-start;
  }

  &-right {
    width: 50%;
    justify-content: flex-end;
  }
}
</style>
