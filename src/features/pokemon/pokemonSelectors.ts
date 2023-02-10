import { RootState } from '../../app/store';

export const selectList = (state: RootState) =>
  state.pokemon.list;
export const selectHistory = (state: RootState) =>
  state.pokemon.history;
