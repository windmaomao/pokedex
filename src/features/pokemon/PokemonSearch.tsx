import { useState } from 'react';
import { Pokemon } from './pokemonSlice';
import { selectList } from './pokemonSelectors';
import { useAppSelector } from '../../app/hooks';

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
      setData(list.filter((v) => v.name.includes(value)));
    }
  };

  return (
    <div>
      <div>
        <input value={value} onChange={onChange} />
        <button onClick={onSearch}>Search</button>
      </div>
      <div className="searchResults">
        {data.map((p) => (
          <div key={p.name} className="item">
            <img alt="" src={spriteUrl(p.id)} />
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonSearch;
