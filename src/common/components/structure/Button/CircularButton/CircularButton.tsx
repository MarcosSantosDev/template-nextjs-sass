import * as React from 'react';

import { CircularButtonProps } from './CircularButton.types';

import styles from './CircularButton.module.scss';

function CircularButton({
  children,
  variantColor = 'deep-green',
  size = 'md',
  iconOrientation = 'horizontal',
  endIcon,
  ...buttonRestProps
}: React.PropsWithChildren<CircularButtonProps>) {
  const activeFullWidth = iconOrientation === 'vertical' ? styles.btn__vertical : '';

  return (
    <button
      {...buttonRestProps}
      className={`${styles.btn} ${styles[`btn__${size}`]} ${styles[`btn__${variantColor}`]} ${activeFullWidth}`}
    >
      {children}
      {endIcon}
    </button>
  );
}

export default CircularButton;
