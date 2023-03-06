import { useState } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  name: string;
  src: string;
}

const short = (str: string) => {
  return str.split('-').map((s: string) => s[0]);
};

const Avatar = ({ name, src }: AvatarProps) => {
  const [error, setError] = useState(false);
  const onError = () => {
    setError(true);
  };

  return (
    <>
      {error ? (
        <span className={styles.missing}>
          {short(name)}
        </span>
      ) : (
        <img src={src} alt={name} onError={onError} />
      )}
    </>
  );
};

export default Avatar;
