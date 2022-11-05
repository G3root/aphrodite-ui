import { ReactNode } from 'react';
import { PageContainer, SideBar } from '~/components';
import { DocFrontMatter } from '~/types';
import { FindAnchorsReturn } from '~/utils';

interface DocsLayoutProps {
  frontMatter: DocFrontMatter;
  children: ReactNode;
  anchors: FindAnchorsReturn;
}

export function DocsLayout(props: DocsLayoutProps) {
  const { frontMatter, children, anchors } = props;

  return (
    <PageContainer sidebar={<SideBar />} frontMatter={frontMatter}>
      {children}
    </PageContainer>
  );
}
