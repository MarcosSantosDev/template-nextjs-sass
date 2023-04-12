import { LabelProps } from './Label.types';

import styles from './Label.module.scss';

function Label({ htmlFor, children, ...labelRestProps }: LabelProps) {
  return (
    <label {...labelRestProps} htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
}

export default Label;
