import React from 'react';

import { AppLayoutProps } from './AppLayout.types';

import styles from './AppLayout.module.scss';

function AppLayout({ children }: AppLayoutProps) {
  return <div className={styles['app-layout']}>{children}</div>;
}

export default AppLayout;
