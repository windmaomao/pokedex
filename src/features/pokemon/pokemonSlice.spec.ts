import pokemonReducer, {
  PokemonState,
  initList,
} from './pokemonSlice';

describe('pokemon reducer', () => {
  const initialState: PokemonState = { list: [] };

  it('should handle initial state', () => {
    expect(
      pokemonReducer(undefined, { type: 'unknown' }),
    ).toEqual({
      list: [],
    });
  });

  it('should handle init list', () => {
    const actual = pokemonReducer(
      initialState,
      initList([{ id: '2', name: 'Hello' }]),
    );
    expect(actual.list.length).toEqual(1);
  });
});
