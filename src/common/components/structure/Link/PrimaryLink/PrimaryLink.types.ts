import * as React from 'react';
import { LinkProps } from 'next/link';

export interface PrimaryLinkProps
  extends Omit<LinkProps, 'as' | 'replace' | 'scroll' | 'shallow' | 'passHref'>,
    Omit<React.HTMLProps<HTMLAnchorElement>, 'href' | 'as'> {
  iconPosition?: 'start' | 'end';
  icon?: React.ReactNode;
  disabled?: boolean;
  variantText?: 'white' | 'black';
  variantCircle?: 'deep-green' | 'magenta' | 'royal-blue';
}
