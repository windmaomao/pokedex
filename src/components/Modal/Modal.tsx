import ThemeSelect from 'src/components/ThemeSelect';
import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalTitle}>Theme</div>
      <ThemeSelect />
    </div>
  );
};

export default Modal;
