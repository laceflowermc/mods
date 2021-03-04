<template>
  <header class="docs__header">
    <div class="docs__header-content">Logo Here</div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.docs__header {
  position: sticky;
  display: block;
  top: 0;
  z-index: 10;
  background-color: $docs-color-primary;
  color: $docs-color-text;
  border-bottom: 1px solid $docs-color-primary-accent;

  &-content {
    display: flex;
    max-width: $docs-container-width;
    height: $docs-header-height;
    margin: auto;
    align-items: center;
    color: white;
  }
}
</style>
