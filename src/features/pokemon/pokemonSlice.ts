import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export interface Pokemon {
  id: string;
  name: string;
}

export interface PokemonState {
  list: Pokemon[];
}

const initialState: PokemonState = {
  list: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    initList: (state, action: PayloadAction<Pokemon[]>) => {
      state.list = action.payload;
    },
  },
});

export const { initList } = pokemonSlice.actions;

export default pokemonSlice.reducer;
