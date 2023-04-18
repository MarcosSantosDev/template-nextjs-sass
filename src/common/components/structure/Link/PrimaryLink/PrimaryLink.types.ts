import * as React from 'react';
import { LinkProps } from 'next/link';

export interface PrimaryLinkProps
  extends Omit<LinkProps, 'as' | 'replace' | 'scroll' | 'shallow' | 'passHref'>,
    Omit<React.HTMLProps<HTMLAnchorElement>, 'href' | 'as'> {
  disabled?: boolean;
  variantText?: 'white' | 'black';
  variantCircle?: 'deep-green' | 'magenta' | 'royal-blue';
  iconPosition?: 'start' | 'end';
  icon?: React.ReactNode;
  children: React.ReactNode;
}
