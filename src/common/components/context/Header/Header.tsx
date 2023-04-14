import * as React from 'react';
import Image from 'next/image';

import styles from './Header.module.scss';

function Header({ children }: React.PropsWithChildren<unknown>) {
  return (
    <header className={styles.navbar}>
      <Image
        src="next.svg"
        alt="Next.js"
        className={styles['navbar-image']}
        height={16}
        width={100}
      />

      {children}
    </header>
  );
}

export default Header;
