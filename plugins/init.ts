import { Context } from "@nuxt/types";
import { IContentDocument } from "@nuxt/content/types/content";

export default async function ({ $content, store }: Context) {
  const docs = await $content("docs", { deep: true })
    .only(["title", "category", "slug", "dir", "path", "updatedAt"])
    .sortBy("position", "asc")
    .fetch();

  const documents: Record<string, IContentDocument[]> = {};

  for (const doc of docs.filter((d: any) => d.category) as IContentDocument[]) {
    if (!documents[doc.category]) {
      documents[doc.category] = [];
    }

    documents[doc.category].push(doc);
  }

  store.commit("SET_DOCUMENTS", documents);
}
