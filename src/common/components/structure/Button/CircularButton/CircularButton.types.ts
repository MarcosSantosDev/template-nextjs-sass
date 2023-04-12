import * as React from 'react';

import { ButtonStyleProps } from '../Button.types';

export interface CircularButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<ButtonStyleProps> {
  endIcon?: React.ReactNode;
  iconOrientation?: 'horizontal' | 'vertical';
}
