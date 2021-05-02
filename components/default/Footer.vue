<template>
  <footer id="footer">
    <div class="content">
      <div class="left">
        <span class="copyright">
          &copy; {{ new Date().getFullYear() }} BlakeBr0
        </span>
      </div>
      <div class="right"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

#footer {
  display: block;
  font-family: Lato, "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  .content {
    display: flex;
    width: $default-container-width;
    height: 100%;
    margin: 0 auto;
    padding: 30px 0;
    flex: 1 1 auto;
    align-items: center;
  }
}
</style>
