import { useState } from 'react';
import {
  selectHistory,
  selectResults,
} from './pokemonSelectors';
import {
  useAppSelector,
  useAppDispatch,
} from '../../app/hooks';
import { pushHistory, searchList } from './pokemonSlice';
import styles from './PokemonSearch.module.css';

const spriteUrl = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const PokemonSearch = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const onSearch = () => {
    dispatch(searchList(value));
    dispatch(pushHistory(value));
  };

  const history = useAppSelector(selectHistory);
  const results = useAppSelector(selectResults);

  return (
    <div>
      <small>You have searched: {history.join(', ')}</small>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={value}
          onChange={onChange}
          placeholder="Search by name or id"
        />
        &nbsp;
        <button onClick={onSearch}>Go</button>
      </form>
      {results.length > 0 && (
        <div className={styles.searchMessage}>
          You found {results.length} results.
        </div>
      )}
      <div className={styles.searchResults}>
        {results.map((p) => (
          <div key={p.name} className={styles.searchItem}>
            <img alt="" src={spriteUrl(p.id)} />
            <div>
              <div>{p.name}</div>
              <small>(id: {p.id})</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonSearch;
