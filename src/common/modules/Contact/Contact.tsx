import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from './Contact.module.scss';

export default function Contact() {
  const { t: translateContact } = useTranslation('contact');
  const { t: translateCommon } = useTranslation('common');

  const { push } = useRouter();

  const goToHomePage = () => push('/');

  return (
    <>
      <h1 className={styles.title}>
        {translateCommon('welcome', { frameworkName: 'Nextjs' })}
      </h1>
      <h2>{translateContact('contact.title')}</h2>

      <br />

      <button type="button" onClick={goToHomePage}>
        {translateContact('contact.link_go_to_home_page')}
      </button>
    </>
  );
}
