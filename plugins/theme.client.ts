import { Context } from "@nuxt/types";

export default async function ({ store }: Context) {
  const theme = window.localStorage.getItem("theme") ?? "dark";

  await store.dispatch("UPDATE_THEME", theme);
}
