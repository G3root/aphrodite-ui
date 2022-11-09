import { ReactNode } from 'react';
import { PageContainer, Pagination, SideBar } from '~/components';
import { DocFrontMatter } from '~/types';

interface DocsLayoutProps {
  frontMatter: DocFrontMatter;
  children: ReactNode;
}

export function DocsLayout(props: DocsLayoutProps) {
  const { frontMatter, children } = props;

  return (
    <PageContainer
      pagination={<Pagination />}
      sidebar={<SideBar />}
      frontMatter={frontMatter}
    >
      {children}
    </PageContainer>
  );
}
