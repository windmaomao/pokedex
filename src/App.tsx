import { useState } from 'react';
import Pokemon from 'src/features/pokemon/Pokemon';
import { ThemeProvider } from 'src/features/theme';
// import ThemeSelect from 'src/components/ThemeSelect';
import Modal from 'src/components/SettingsModal';
import styles from './App.module.css';

function App() {
  const [on, setOn] = useState(false);
  const onClick = () => {
    setOn(true);
  };
  const onClose = () => {
    setOn(false);
  };

  return (
    <ThemeProvider>
      <div className={styles.app}>
        <div className={styles.settings} onClick={onClick}>
          light | dark
        </div>
        <Modal on={on} close={onClose} />
        <div className={styles.title}>POKEDEX</div>
        <Pokemon />
      </div>
    </ThemeProvider>
  );
}

export default App;
