import { useTheme, light, dark, ThemeType } from 'src/features/theme';
import styles from './ThemeSelect.module.css';

const themes = [light, dark];

const ThemeSelect = () => {
  const { theme, change } = useTheme();
  const onChange = (t: ThemeType) => () => {
    change(t);
  };
  const themeStyle = (t: ThemeType) => (t === theme ? styles.selected : '');

  return (
    <div className={styles.themes}>
      {themes.map((t) => (
        <span key={t.id} onClick={onChange(t)} className={themeStyle(t)}>
          {t.id}
        </span>
      ))}
    </div>
  );
};

export default ThemeSelect;
