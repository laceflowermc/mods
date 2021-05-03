<template>
  <header class="header" :class="{ scrolled, mobile }">
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
      <div class="right" :class="{ active: menu }">
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
      <font-awesome-icon
        v-if="mobile"
        :icon="['fas', 'bars']"
        @click="menu = !menu"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrolled: false,
      mobile: false,
      menu: false
    };
  },
  mounted() {
    this._onScrollWindow = () => {
      this.scrolled = window.scrollY > 60;
    };

    this._onResizeWindow = () => {
      this.mobile = window.innerWidth <= 600;

      if (!this.mobile) {
        this.menu = false;
      }
    };

    window.addEventListener("scroll", this._onScrollWindow);
    window.addEventListener("resize", this._onResizeWindow);

    this._onResizeWindow();
  },
  destroyed() {
    window.removeEventListener("scroll", this._onScrollWindow);
    window.removeEventListener("resize", this._onResizeWindow);
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
  font-family: Lato, "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  transition: 0.5s;

  .content {
    display: flex;
    max-width: $default-container-width + 40px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    flex: 1 1 auto;
    justify-content: space-between;
    align-items: center;

    .left {
      img {
        filter: drop-shadow(0 0 0.25em gray);
        transition: 0.5s;
      }
    }

    .right {
      display: flex;
      margin: 0 -10px;
      line-height: 2;
      font-weight: bold;

      a {
        margin: 0 10px;
        color: $default-color-text;
        transition: 0.5s;
      }
    }

    .fa-bars {
      font-size: 24px;
      cursor: pointer;
      user-select: none;
    }
  }

  &.scrolled,
  &.mobile {
    height: $default-header-height-compact;
    background-color: $default-color-header;

    .content {
      .left {
        img {
          height: 25px;
        }
      }

      .right {
        a {
          font-weight: initial;
        }
      }
    }
  }

  &.mobile {
    .content {
      .right {
        display: none;
        box-shadow: $default-card-shadow;

        &.active {
          display: flex;
          position: absolute;
          width: 200px;
          top: 50px;
          right: 0;
          flex-direction: column;
          background-color: $default-color-header;
        }

        a {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
