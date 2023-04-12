import type { AppProps } from 'next/app';
import { Heebo, Poppins } from 'next/font/google';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-poppins: ${poppins.style.fontFamily};
          --font-heebo: ${heebo.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
