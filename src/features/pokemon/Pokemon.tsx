import { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../app/hooks';
import { initList } from './pokemonSlice';
import PokemonSearch from './PokemonSearch';

const listUrl = `https://pokeapi.co/api/v2/pokemon/?limit=12000`;
const resolveId = (url: string) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

const Pokemon = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios(listUrl).then((res) => {
      const { results } = res.data;
      const data = results.map((v: any) => ({
        id: resolveId(v.url),
        name: v.name,
      }));
      dispatch(initList(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PokemonSearch />
    </div>
  );
};

export default Pokemon;
