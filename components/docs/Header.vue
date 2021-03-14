<template>
  <header class="docs__header">
    <div class="docs__header-content">
      <nuxt-link class="docs__header-logo" to="/docs">
        <img src="/img/logo-darkmode.png" alt="blakes mods logo" height="50" />
      </nuxt-link>
      <div class="docs__header-search">
        <font-awesome-icon :icon="['fas', 'search']" />
        <input type="text" placeholder="Search..." v-model="search" />
        <SearchResults :search="search" />
      </div>
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

import SearchResults from "~/components/docs/SearchResults.vue";

export default Vue.extend({
  name: "Header",
  components: {
    SearchResults
  },
  data() {
    return {
      search: ""
    };
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
    width: 220px;
    padding-right: $docs-spacing;
  }

  &-search {
    display: flex;
    width: 100%;
    position: relative;

    .fa-search {
      position: absolute;
      top: 6px;
      left: 10px;
    }

    input {
      display: flex;
      width: 100%;
      padding: 7px 5px 7px 35px;
      background: $docs-color-search;
      border: none;
      border-radius: 5px;
      color: $docs-color-text;

      &::placeholder {
        color: $docs-color-text;
      }
    }
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
