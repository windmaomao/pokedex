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
  history: string[];
}

const initialState: PokemonState = {
  list: [],
  history: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    initList: (state, action: PayloadAction<Pokemon[]>) => {
      state.list = action.payload;
      state.history = [];
    },
    pushHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
  },
});

export const { initList, pushHistory } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
