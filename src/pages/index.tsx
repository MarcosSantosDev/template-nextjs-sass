import Head from 'next/head';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Playground Nextjs</title>
        <meta name="description" content="Playground Nextjs" />
      </Head>
      <main>
        <h2 className={styles.title}>Bem vindo a pagina inicial do Playground Nextjs</h2>
      </main>
    </>
  );
}
