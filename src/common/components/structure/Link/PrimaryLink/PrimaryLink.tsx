import * as React from 'react';
import NextLink from 'next/link';

import { PrimaryLinkProps } from './PrimaryLink.types';

import styles from './PrimaryLink.module.scss';

function PrimaryLink({
  children,
  href,
  disabled = false,
  variantText = 'black',
  variantCircle = 'deep-green',
  iconPosition = 'end',
  icon = null,
  ...primaryLinkRestProps
}: PrimaryLinkProps) {
  const linkStartIconClass =
    iconPosition === 'start' ? styles['link__row-reverse'] : '';
  const linkDisableClass = disabled ? styles['link--disable'] : '';
  const linkVariantColorClass =
    styles[`link__text-${variantText}__circle-${variantCircle}`];

  const linkIcon = icon ? (
    <div className={styles.link__circle}>{icon}</div>
  ) : null;

  return (
    <NextLink href={href} passHref legacyBehavior>
      <a
        {...primaryLinkRestProps}
        className={`${styles.link} ${linkStartIconClass} ${linkVariantColorClass} ${linkDisableClass}`}
      >
        {children}
        {linkIcon}
      </a>
    </NextLink>
  );
}

export default PrimaryLink;
