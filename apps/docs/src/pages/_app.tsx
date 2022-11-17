import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { siteConfig } from '~/configs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultSeo {...siteConfig.seo} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
