import ThemeSelect from 'src/components/ThemeSelect';
import styles from './SettingsModal.module.css';

interface ModalProps {
  on: boolean;
  close: Function;
}

const Modal = ({ on, close }: ModalProps) => {
  if (!on) return null;
  const onClick = () => {
    close();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalTitle}>Theme</div>
      <ThemeSelect />
      <button onClick={onClick}>close</button>
    </div>
  );
};

export default Modal;
