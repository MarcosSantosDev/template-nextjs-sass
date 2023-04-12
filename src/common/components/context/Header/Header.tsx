import * as React from 'react';

import styles from './Header.module.scss';

function Header({ children }: React.PropsWithChildren<unknown>) {
  return <header className={styles.navbar}>{children}</header>;
}

export default Header;
