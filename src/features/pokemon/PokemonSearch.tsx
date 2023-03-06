import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Avatar from 'src/components/Avatar';
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
  const dispatch: any = useAppDispatch();
  const [value, setValue] = useState('');

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const onSearch = (v: string) => () => {
    dispatch(searchList(v));
    dispatch(pushHistory(v));
    setValue('');
  };

  const history = useAppSelector(selectHistory);
  const results = useAppSelector(selectResults);

  return (
    <div>
      {history.length > 0 && (
        <div className={styles.searchHistory}>
          History: &nbsp;
          {history.map((s, i) => (
            <span key={i} onClick={onSearch(s)}>
              {s}
            </span>
          ))}
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className={styles.searchInput}
          value={value}
          onChange={onChange}
          placeholder="Search by name or id"
        />
        &nbsp;
        <button
          className={styles.searchButton}
          onClick={onSearch(value)}
        >
          go
        </button>
      </form>
      {results.length > 0 && (
        <div className={styles.searchMessage}>
          You found {results.length} results.
        </div>
      )}
      <div className={styles.searchResults}>
        <AnimatePresence>
          {results.map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.searchItem}
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: false, amount: 1 }}
              whileHover={{ scale: 1.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.03,
                scale: {
                  delay: 0.05,
                  duration: 0.2,
                },
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ type: 'spring', bounce: 0.2 }}
                whileHover={{
                  rotate: [360, 370, 350, 360],
                }}
              >
                <Avatar
                  name={p.name}
                  src={spriteUrl(p.id)}
                />
              </motion.div>
              <div>
                <div>{p.name}</div>
                <small>(id: {p.id})</small>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PokemonSearch;
