import { InputProps } from './Input.types';

import styles from './Input.module.scss';

function Input({ ...inputRestProps }: InputProps) {
  return <input {...inputRestProps} className={styles.input} />;
}

export default Input;
