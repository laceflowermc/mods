<template>
  <header class="header" :class="{ scrolled }">
    <div class="content">
      <div class="left">
        <nuxt-link class="logo" to="/">
          <img
            src="/img/logo-darkmode.png"
            alt="blakes mods logo"
            height="35"
          />
        </nuxt-link>
      </div>
      <div class="right">
        <nuxt-link to="/docs">Docs</nuxt-link>
        <nuxt-link to="/guides">Guides</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>

        <a
          href="https://github.com/BlakeBr0"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.curseforge.com/members/blakebr0/projects"
          title="CurseForge"
          target="_blank"
          rel="noopener noreferrer"
        >
          CurseForge
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrolled: false
    };
  },
  mounted() {
    this._onScrollWindow = () => {
      this.scrolled = window.scrollY > 60;
    };

    window.addEventListener("scroll", this._onScrollWindow);
  },
  destroyed() {
    window.removeEventListener("scroll", this._onScrollWindow);
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.header {
  position: fixed;
  display: block;
  width: 100%;
  height: $default-header-height;
  top: 0;
  z-index: 100;
  background-color: $default-color-background;
  font-family: Lato, "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  transition: 0.5s;

  &.scrolled {
    height: #{$default-header-height / 2};
    background-color: $default-color-header;

    .content {
      .left {
        img {
          filter: drop-shadow(0 0 0.25em gray);
          height: 25px;
        }
      }

      .right {
        a {
          color: white;
        }
      }
    }
  }

  .content {
    display: flex;
    width: $default-container-width;
    height: 100%;
    margin: 0 auto;
    flex: 1 1 auto;
    justify-content: space-between;
    align-items: center;

    .left {
      img {
        filter: invert(1) drop-shadow(0 0 0.25em gray);
        transition: 0.5s;
      }
    }

    .right {
      display: flex;
      margin: 0 -10px;
      vertical-align: center;

      a {
        margin: 0 10px;
        color: black;
        transition: 0.5s;
      }
    }
  }
}
</style>
