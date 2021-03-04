<template>
  <footer class="docs__footer">
    <div class="docs__footer-content">
      &copy; {{ new Date().getFullYear() }} BlakeBr0
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.docs__footer {
  border-top: 1px solid $docs-color-primary-accent;

  .docs__footer-content {
    display: flex;
    max-width: $docs-container-width;
    height: $docs-footer-height;
    margin: auto;
    align-items: center;
    color: white;
  }
}
</style>
