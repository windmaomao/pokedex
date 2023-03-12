import classNames from 'classnames';
import { useTheme, light, dark, ThemeType } from 'src/features/theme';
import styles from './ThemeSelect.module.css';

const themes = [light, dark];

const ThemeSelect = () => {
  const { theme, change } = useTheme();
  const onChange = (t: ThemeType) => () => {
    change(t);
  };
  const themeClassnames = (t: ThemeType) => {
    const current = t === theme;
    return classNames({
      [styles.selected]: current,
      [styles.unselected]: !current,
    });
  };

  return (
    <div className={styles.themes}>
      {themes.map((t) => (
        <span key={t.id} onClick={onChange(t)} className={themeClassnames(t)}>
          {t.id}
        </span>
      ))}
    </div>
  );
};

export default ThemeSelect;
