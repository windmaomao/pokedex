import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Tooltip.module.css';

interface TooltipProps {
  children: React.ReactNode;
  title: React.ReactNode;
}
const Tooltip = ({ children, title }: TooltipProps) => {
  const [entered, setEntered] = useState(false);
  const on = (v: boolean) => () => {
    setEntered(v);
  };

  const [left, setLeft] = useState(false);
  useEffect(() => {
    function handleMouseOver(e: any) {
      const p = e.clientX / window.innerWidth;
      setLeft(p > 0.5);
    }
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener(
        'mouseover',
        handleMouseOver,
      );
    };
  });

  const popupClassnames = classNames(styles.popup, {
    [styles.invert]: left,
  });

  return (
    <div className={styles.tooltip}>
      <div onMouseEnter={on(true)} onMouseLeave={on(false)}>
        {children}
      </div>
      {entered && (
        <div className={popupClassnames}>{title}</div>
      )}
    </div>
  );
};

export default Tooltip;
