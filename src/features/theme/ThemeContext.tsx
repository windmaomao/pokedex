import { createContext } from 'react';
import ThemeType from './ThemeType';
import light from './light.theme';

interface ValueType {
  theme: ThemeType;
  change: (t: ThemeType) => void;
}

const defaultValue: ValueType = {
  theme: light,
  change: (t: ThemeType) => {},
};

const ThemeContext = createContext<ValueType>(defaultValue);
export default ThemeContext;
