import { MutationTree } from "vuex";

export const state = () => ({
  categories: []
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_CATEGORIES: (state, categories) => {
    state.categories = categories;
  }
};
