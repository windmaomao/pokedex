import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { initList } from './pokemonSlice';
import PokemonSearch from './PokemonSearch';

const data = [
  { id: '1', name: 'bulbasaur' },
  { id: '2', name: 'ivysaur' },
];

const Pokemon = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initList(data));
  }, [dispatch]);

  return (
    <div>
      <PokemonSearch />
    </div>
  );
};

export default Pokemon;
