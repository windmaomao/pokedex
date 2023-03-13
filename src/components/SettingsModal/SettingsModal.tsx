import { useRef, useEffect } from 'react';
import ThemeSelect from 'src/components/ThemeSelect';
import styles from './SettingsModal.module.css';

interface ModalProps {
  on: boolean;
  close: Function;
}

const Modal = ({ on, close }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function mousedown(e: any) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        close();
      }
    }
    window.addEventListener('mousedown', mousedown);
    return () => {
      window.removeEventListener('mousedown', mousedown);
    };
  }, [close]);

  if (!on) return null;

  return (
    <div ref={ref} className={styles.modal}>
      <div className={styles.modalTitle}>Theme</div>
      <ThemeSelect />
    </div>
  );
};

export default Modal;
