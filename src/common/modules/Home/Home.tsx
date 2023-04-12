import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from './Home.module.scss';

export default function Home() {
  const { t: translateHome } = useTranslation('home');
  const { t: translateCommon } = useTranslation('common');

  const { push } = useRouter();

  const goToContactPage = () => push('/contato');

  return (
    <>
      <h1 className={styles.title}>
        {translateCommon('welcome', { frameworkName: 'Nextjs' })}
      </h1>
      <h2>{translateHome('home.title')}</h2>

      <br />

      <button type="button" onClick={goToContactPage}>
        {translateHome('home.link_go_to_contact_page')}
      </button>
    </>
  );
}
