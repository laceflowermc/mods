<template>
  <div class="search">
    <font-awesome-icon :icon="['fas', 'search']" />
    <input type="text" placeholder="Search..." v-model="search" />
    <div class="results" v-if="search" @click="search = ''">
      <nuxt-link
        v-for="result in results"
        class="result"
        :to="result.path"
        :key="result.path"
      >
        <span class="result-title">{{ result.title }}</span>
        <span class="result-category">{{ result.category }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
      results: []
    };
  },
  watch: {
    async search(value) {
      if (!value) {
        this.results = [];
        return;
      }

      this.results = await this.$content("docs", { deep: true })
        .only(["title", "category"])
        .sortBy("createdAt", "asc")
        .limit(12)
        .search(value)
        .fetch();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.search {
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
    border-radius: 5px;
    color: $docs-color-text;
    border: none;
    outline-color: $docs-color-search-accent;

    &::placeholder {
      color: $docs-color-text;
    }
  }

  .results {
    display: flex;
    position: absolute;
    width: calc(100% - 20px);
    top: 31px;
    margin-left: 10px;
    flex-direction: column;
    background-color: $docs-color-search;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .result {
      display: flex;
      flex-direction: column;
      padding: 10px 15px;
      color: $docs-color-text;
      //border: 1px solid $docs-color-search-accent;

      &:hover {
        opacity: 0.75;
      }

      &-title {
        font-weight: bold;
      }

      &-category {
      }
    }
  }
}
</style>
