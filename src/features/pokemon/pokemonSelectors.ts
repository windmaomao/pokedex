import { RootState } from '../../app/store';

export const selectList = (state: RootState) => state.pokemon.list;