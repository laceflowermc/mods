<template>
  <footer class="footer">
    <div class="content">&copy; {{ new Date().getFullYear() }} BlakeBr0</div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.footer {
  border-top: 1px solid $docs-color-primary-accent;

  .content {
    display: flex;
    max-width: $docs-container-width;
    height: $docs-footer-height;
    margin: auto;
    align-items: center;
    color: $docs-color-text;
  }
}
</style>
