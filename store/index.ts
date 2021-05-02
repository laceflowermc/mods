import { MutationTree, ActionTree } from "vuex";

export const state = () => ({
  theme: "dark",
  documents: []
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_THEME: (state, theme) => {
    state.theme = theme;
  },
  SET_DOCUMENTS: (state, documents) => {
    state.documents = documents;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  UPDATE_THEME: ({ commit }, theme) => {
    window.localStorage.setItem("theme", theme);

    commit("SET_THEME", theme);

    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
  }
};
