import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { siteConfig } from '~/configs';
import { Inter } from '@next/font/google';

const interVariable = Inter({
  subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultSeo {...siteConfig.seo} />
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
