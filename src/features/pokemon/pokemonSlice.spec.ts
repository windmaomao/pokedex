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
    const nextState = pokemonReducer(
      initialState,
      pushHistory('de'),
    );
    expect(nextState.history.length).toEqual(1);
    const nextState2 = pokemonReducer(
      nextState,
      pushHistory(''),
    );
    expect(nextState2.history.length).toEqual(1);
    const nextState3 = pokemonReducer(
      nextState2,
      pushHistory('de'),
    );
    expect(nextState3.history.length).toEqual(1);
    const nextState4 = pokemonReducer(
      nextState3,
      pushHistory('ab'),
    );
    expect(nextState4.history).toEqual(['de', 'ab']);
  });

  it('should search list', () => {
    const nextState = pokemonReducer(
      initialState,
      initList([
        { id: '1', name: 'Hello' },
        { id: '2', name: 'World' },
      ]),
    );
    const nextState2 = pokemonReducer(
      nextState,
      searchList('or'),
    );
    expect(nextState2.results.length).toEqual(1);
    expect(nextState2.results[0].id).toEqual('2');
    const nextState3 = pokemonReducer(
      nextState2,
      searchList('1'),
    );
    expect(nextState3.results.length).toEqual(1);
    expect(nextState3.results[0].id).toEqual('1');
  });
});
