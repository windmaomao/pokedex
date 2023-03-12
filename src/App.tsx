import Pokemon from 'src/features/pokemon/Pokemon';
import { ThemeProvider } from 'src/features/theme';
import ThemeSelect from 'src/components/ThemeSelect';
import styles from './App.module.css';

function App() {
  return (
    <ThemeProvider>
      <div className={styles.app}>
        <ThemeSelect />
        <div className={styles.title}>POKEDEX</div>
        <Pokemon />
      </div>
    </ThemeProvider>
  );
}

export default App;
