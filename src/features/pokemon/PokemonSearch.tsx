import { useState } from 'react';
import { Pokemon } from './pokemonSlice';
import { selectList } from './pokemonSelectors';
import { useAppSelector } from '../../app/hooks';
import styles from './PokemonSearch.module.css';

const spriteUrl = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const PokemonSearch = () => {
  const list = useAppSelector(selectList);
  const [value, setValue] = useState('');
  const [data, setData] = useState<Pokemon[]>([]);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const onSearch = () => {
    if (!value) {
      setData([]);
    } else {
      setData(
        list.filter(
          (v) =>
            v.name.includes(value) || v.id.includes(value),
        ),
      );
    }
  };

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={onChange}
          placeholder="Search by name or id"
        />
        &nbsp;
        <button onClick={onSearch}>Go</button>
      </div>
      <div className={styles.searchResults}>
        {data.map((p) => (
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
