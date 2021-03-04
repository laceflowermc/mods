import { Context } from "@nuxt/types";
import { IContentDocument } from "@nuxt/content/types/content";

export default async function ({ $content, store }: Context) {
  const docs = await $content("docs", { deep: true })
    .only(["title", "sidebar_title", "category"])
    .sortBy("position", "asc")
    .fetch();

  console.log(docs);

  const categories: Record<string, IContentDocument[]> = {};

  store.commit("SET_CATEGORIES", categories);
}
