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
  results: Pokemon[];
}

const initialState: PokemonState = {
  list: [],
  history: [],
  results: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    initList: (state, action: PayloadAction<Pokemon[]>) => {
      state.list = action.payload;
      state.history = [];
      state.results = [];
    },
    pushHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
    searchList: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      if (payload) {
        state.results = state.list.filter(
          (v) =>
            v.name.includes(payload) ||
            v.id.includes(payload),
        );
      } else {
        state.results = [];
      }
    },
  },
});

export const { initList, pushHistory, searchList } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
