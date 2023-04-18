import * as React from 'react';

export interface FormFieldWrapperProps {
  label: string;
  error?: {
    hasError: boolean;
    message: string;
  };
  children: React.ReactNode;
}
