import { useState, ReactNode } from 'react';
import ThemeContext from './ThemeContext';
import ThemeType from './ThemeType';
import light from './light.theme';
// import dark from './dark.theme';
import getThemeStyle from './getThemeStyle';

interface ThemeProviderProps {
  initialTheme?: ThemeType;
  children: ReactNode;
}

const ThemeProvider = ({
  initialTheme = light,
  children,
}: ThemeProviderProps) => {
  const [theme, change] = useState(initialTheme);
  const value = { theme, change };
  console.log(theme);
  return (
    <ThemeContext.Provider value={value}>
      <div style={getThemeStyle(theme)} className={theme.id}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
