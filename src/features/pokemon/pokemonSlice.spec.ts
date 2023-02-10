import pokemonReducer, {
  PokemonState,
  initList,
  pushHistory,
} from './pokemonSlice';

describe('pokemon reducer', () => {
  const initialState: PokemonState = {
    list: [],
    history: [],
  };

  it('should initialize state', () => {
    expect(
      pokemonReducer(undefined, { type: 'unknown' }),
    ).toEqual({
      list: [],
      history: [],
    });
  });

  it('should init list', () => {
    const actual = pokemonReducer(
      initialState,
      initList([{ id: '2', name: 'Hello' }]),
    );
    expect(actual.list.length).toEqual(1);
  });

  it('should push history', () => {
    const actual = pokemonReducer(
      initialState,
      pushHistory('de'),
    );
    expect(actual.history.length).toEqual(1);
  });
});
