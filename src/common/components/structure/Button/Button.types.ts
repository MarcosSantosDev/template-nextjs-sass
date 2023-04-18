import * as React from 'react';

export interface ButtonStyleProps {
  variantColor:
    | 'deep-green'
    | 'yellow'
    | 'orange'
    | 'magenta'
    | 'royal-blue'
    | 'black'
    | 'white'
    | 'gray';
  size: 'sm' | 'md' | 'lg' | 'x-lg';
  children: React.ReactNode;
}
