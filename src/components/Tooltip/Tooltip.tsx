import React, { useState } from 'react';
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

  return (
    <div className={styles.tooltip}>
      <div onMouseEnter={on(true)} onMouseLeave={on(false)}>
        {children}
      </div>
      {entered && (
        <div className={styles.popup}>{title}</div>
      )}
    </div>
  );
};

export default Tooltip;
