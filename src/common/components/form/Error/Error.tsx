import { ErrorProps } from './Error.types';

import styles from './Error.module.scss';

function Error({ children }: ErrorProps) {
  return <p className={styles.error}>{children}</p>;
}

export default Error;
