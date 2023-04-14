import * as React from 'react';

export interface ErrorProps extends React.InputHTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode | null;
  showError?: boolean;
}
