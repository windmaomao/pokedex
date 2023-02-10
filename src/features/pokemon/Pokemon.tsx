import { useEffect } from 'react';
import {
  useAppSelector,
  useAppDispatch,
} from '../../app/hooks';
import { initList } from './pokemonSlice';
import { selectList } from './pokemonSelectors';

const data = [
  { id: '1', name: 'bulbasaur' },
  { id: '2', name: 'ivysaur' },
];

const Pokemon = () => {
  const list = useAppSelector(selectList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initList(data));
  }, [dispatch]);

  return <div>{list.length}</div>;
};

export default Pokemon;
