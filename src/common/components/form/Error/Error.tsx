import { ErrorProps } from './Error.types';

import styles from './Error.module.scss';

function Error({ children, showError, ...restSpanProps }: ErrorProps) {
  if (showError) {
    return (
      <span
        {...restSpanProps}
        role="alert"
        aria-live="assertive"
        className={styles.error}
      >
        {children}
      </span>
    );
  }

  return null;
}

export default Error;
