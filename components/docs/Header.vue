<template>
  <header class="docs__header">
    <div class="docs__header-content">
      <nuxt-link class="docs__header-logo" to="/docs">
        <img src="/img/logo-darkmode.png" alt="blakes mods logo" height="35" />
      </nuxt-link>

      <Search />

      <div class="docs__header-icons">
        <a href="https://github.com/BlakeBr0" title="GitHub" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://www.curseforge.com/members/blakebr0/projects"
          title="CurseForge"
          target="_blank"
        >
          <font-awesome-icon :icon="['fas', 'fire']" />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

import Search from "~/components/docs/Search.vue";

export default Vue.extend({
  name: "Header",
  components: {
    Search
  }
});
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

    img {
      display: flex;
    }
  }

  &-logo {
    min-width: 220px;
    padding-right: $docs-spacing;
    filter: drop-shadow(0 0 0.25em black);
  }

  &-icons {
    display: flex;
    min-width: 220px;
    justify-content: flex-end;
    padding-left: $docs-spacing;
    font-size: 24px;

    a {
      color: $docs-color-text;
      margin-left: 15px;

      &:hover {
        color: $docs-color-primary-accent;
      }
    }
  }
}
</style>
