export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: title =>
      title ? `${title} · Blake's Mods` : "Blake's Mods",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The official website of BlakeBr0's Minecraft mods. Including Mystical Agriculture, Pickle Tweaks, Iron Jetpacks and more!"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/init.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/fontawesome"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ["title", "description", "slug", "text", "category"],
    markdown: {
      prism: {
        theme: "prismjs/themes/prism-tomorrow.css"
      }
    }
  },

  fontawesome: {
    icons: {
      solid: ["faSearch", "faArrowLeft", "faArrowRight", "faDownload"],
      brands: ["faGithub"]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  hooks: {
    "content:file:beforeParse": file => {
      if (file.path.endsWith("/index")) {
        file.path = file.path.slice(-6) || "/";
      }
    }
  },

  router: {
    extendRoutes(router, resolve) {
      router.push({
        path: "/docs",
        component: resolve(__dirname, "pages/docs/_.vue")
      });
    }
  }
};
