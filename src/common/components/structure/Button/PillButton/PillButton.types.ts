import * as React from 'react';

import { ButtonStyleProps } from '../Button.types';

export interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Partial<ButtonStyleProps> {
  fullWidth?: boolean;
}
