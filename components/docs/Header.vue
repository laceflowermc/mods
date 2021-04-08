<template>
  <header class="docs__header">
    <div class="content">
      <nuxt-link class="logo" to="/docs">
        <img src="/img/logo-darkmode.png" alt="blakes mods logo" height="35" />
      </nuxt-link>

      <Search />

      <div class="icons">
        <a href="https://github.com/BlakeBr0" title="GitHub" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://www.curseforge.com/members/blakebr0/projects"
          title="CurseForge"
          target="_blank"
        >
          <CurseForgeLogo width="36px" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import CurseForgeLogo from "~/components/CurseForgeLogo.vue";
import Search from "~/components/docs/Search.vue";

export default {
  name: "Header",
  components: {
    CurseForgeLogo,
    Search
  }
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

  .content {
    display: flex;
    max-width: $docs-container-width;
    height: $docs-header-height;
    margin: auto;
    align-items: center;
    color: white;

    img {
      display: flex;
    }

    .logo {
      min-width: 220px;
      padding-right: $docs-spacing;
      filter: drop-shadow(0 0 0.25em black);
    }

    .icons {
      display: flex;
      min-width: 220px;
      justify-content: flex-end;
      padding-left: $docs-spacing;
      font-size: 24px;

      a {
        color: $docs-color-text;
        margin-left: 15px;

        .curseforge-logo {
          fill: white;
        }

        &:hover {
          color: $docs-color-primary-accent;

          .curseforge-logo {
            fill: $docs-color-primary-accent;
          }
        }
      }
    }
  }
}
</style>
