import type { AppProps } from 'next/app';
import { Heebo, Poppins } from 'next/font/google';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

import { AppLayout, ChangeLanguage, Header } from '@/common/components/context';

import '@/common/sass/main.scss';

const heebo = Heebo({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heebo',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --font-poppins: ${poppins.style.fontFamily};
          --font-heebo: ${heebo.style.fontFamily};
        }
      `}</style>
      <AppLayout>
        <Header>
          <ChangeLanguage />
        </Header>
        <main>
          <Component {...pageProps} />
        </main>
      </AppLayout>
    </>
  );
}

export default appWithTranslation(App);
