import { CSSProperties } from 'react';
import ThemeType from './ThemeType';

function getThemeCss(theme: ThemeType): CSSProperties {
  const m: any = {};
  Object.entries(theme).forEach(([k, v]) => {
    if (k === 'id') return;
    m['--' + k] = v;
  });

  return m as CSSProperties;
}

export default getThemeCss;
