import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { DocFrontMatter } from '~/types';
import { DocNavbar } from '../doc-navbar';
import { TOC } from '../toc';

export interface PageContainerProps {
  frontMatter: DocFrontMatter;
  children: React.ReactNode;
  sidebar?: React.ReactElement;
  pagination?: React.ReactElement;
}

function useHeadingFocusOnRouteChange() {
  const router = useRouter();

  useEffect(() => {
    const onRouteChange = () => {
      const [heading] = Array.from(document.getElementsByTagName('h1'));
      heading?.focus();
    };
    router.events.on('routeChangeComplete', onRouteChange);
    return () => {
      router.events.off('routeChangeComplete', onRouteChange);
    };
  }, [router.events]);
}

export function PageContainer(props: PageContainerProps) {
  const { frontMatter, children, sidebar, pagination } = props;
  useHeadingFocusOnRouteChange();

  if (!frontMatter) return <></>;

  const { title, description, editUrl, headings = [] } = frontMatter;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <DocNavbar />
      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        {sidebar}

        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article>
            {children}
            {pagination}
          </article>
        </div>

        <TOC editUrl={editUrl} headings={headings} />
      </div>
    </div>
  );
}
