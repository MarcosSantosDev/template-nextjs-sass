import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { PillButton } from '@/common/components/structure';

import styles from './Contact.module.scss';

export default function Contact() {
  const { t: translateContact } = useTranslation('contact');
  const { t: translateCommon } = useTranslation('common');

  const { push } = useRouter();

  const goToHomePage = () => push('/');

  return (
    <section className={styles['section-container']}>
      <h1 className={styles.title}>
        {translateCommon('welcome', { frameworkName: 'Nextjs' })}
      </h1>

      <h2>{translateContact('contact.title')}</h2>

      <PillButton
        id="go-to-home-page"
        type="button"
        onClick={goToHomePage}
        variantColor="orange"
      >
        {translateContact('contact.link_go_to_home_page')}
      </PillButton>
    </section>
  );
}
