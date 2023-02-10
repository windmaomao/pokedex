import pokemonReducer, {
  PokemonState,
  initList,
  pushHistory,
  searchList,
} from './pokemonSlice';

describe('pokemon reducer', () => {
  const initialState: PokemonState = {
    list: [],
    history: [],
    results: [],
  };

  it('should initialize state', () => {
    expect(
      pokemonReducer(undefined, { type: 'unknown' }),
    ).toEqual({
      list: [],
      history: [],
      results: [],
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
    expect(actual.history[0]).toEqual('de');
  });

  it('should search list', () => {
    const nextState = pokemonReducer(
      initialState,
      initList([
        { id: '1', name: 'Hello' },
        { id: '2', name: 'World' },
      ]),
    );
    const actual = pokemonReducer(
      nextState,
      searchList('or'),
    );
    expect(actual.results.length).toEqual(1);
    expect(actual.results[0].id).toEqual('2');
  });
});
