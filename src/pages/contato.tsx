import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Contact } from '@/common/modules';

export default function ContactPage() {
  const { t: translateContact } = useTranslation('contact');

  return (
    <>
      <Head>
        <title>{translateContact('contact.title')}</title>
        <meta name="description" content="Contato | De pessoas para pessoas" />
      </Head>

      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'common'])),
    },
  };
};
