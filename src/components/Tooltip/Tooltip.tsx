import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import styles from './Tooltip.module.css';

interface TooltipProps {
  children: React.ReactNode;
  title: React.ReactNode;
}
const Tooltip = ({ children, title }: TooltipProps) => {
  const [entered, setEntered] = useState(false);
  const on = (v: boolean) => (e: any) => {
    setEntered(v);
  };

  const [left, setLeft] = useState(false);
  // const setLeft_ = useMemo(() => {
  //   return debounce(
  //     (v: boolean) => {
  //       console.info('setLeft debounced');
  //       setLeft(v);
  //     },
  //     300,
  //     { leading: true },
  //   );
  // }, [setLeft]);

  const handleMouseOver = useCallback(
    (e: any) => {
      const p = e.clientX / window.innerWidth;
      console.info('setLeft');
      setLeft(p > 0.5);
    },
    [setLeft],
  );

  const popupClassnames = classNames(styles.popup, {
    [styles.invert]: left,
  });

  return (
    <div className={styles.tooltip}>
      <div
        onMouseEnter={on(true)}
        onMouseLeave={on(false)}
        onMouseOver={handleMouseOver}
      >
        {children}
        {entered && <div className={popupClassnames}>{title}</div>}
      </div>
    </div>
  );
};

export default Tooltip;
