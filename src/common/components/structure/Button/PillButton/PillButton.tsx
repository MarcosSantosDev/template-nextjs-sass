import * as React from 'react';

import { PillButtonProps } from './PillButton.types';

import styles from './PillButton.module.scss';

function PillButton({
  children,
  fullWidth = false,
  variantColor = 'deep-green',
  size = 'md',
  ...buttonRestProps
}: React.PropsWithChildren<PillButtonProps>) {
  const activeFullWidth = fullWidth ? styles['btn__full-width'] : '';

  return (
    <button
      {...buttonRestProps}
      className={`${styles.btn} ${styles[`btn__${size}`]} ${styles[`btn__${variantColor}`]} ${activeFullWidth}`}
    >
      {children}
    </button>
  );
}

export default PillButton;
