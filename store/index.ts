import { MutationTree } from "vuex";

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
