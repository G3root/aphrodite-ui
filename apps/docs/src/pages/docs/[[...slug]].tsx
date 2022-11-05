import { GetStaticPaths } from 'next';
import { allDocs, Doc } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { DocsLayout } from '~/layouts';
import { FindAnchors, FindAnchorsReturn } from '~/utils';
import { createElement, ReactElement } from 'react';

const addDocClass = (props: any, tag: any) =>
  createElement(tag, { ...props, className: 'docs' });

const mdxComponents = {
  h1: (props: any) => addDocClass(props, 'h1'),
  h2: (props: any) => addDocClass(props, 'h2'),
  h3: (props: any) => addDocClass(props, 'h3'),
  h4: (props: any) => addDocClass(props, 'h4'),
  h5: (props: any) => addDocClass(props, 'h5'),
  h6: (props: any) => addDocClass(props, 'h6'),
  p: (props: any) => addDocClass(props, 'p'),
  ol: (props: any) => addDocClass(props, 'ol'),
  ul: (props: any) => addDocClass(props, 'ul'),
  pre: (props: any) => addDocClass(props, 'pre'),
  li: (props: any) => addDocClass(props, 'li'),
  a: (props: any) => addDocClass(props, 'a'),
  code: (props: any) => addDocClass(props, 'code'),
  detail: (props: any) => addDocClass(props, 'detail'),
  blockquote: (props: any) => addDocClass(props, 'blockquote')
};

export default function Page({
  doc,
  anchors
}: {
  doc: Doc;
  anchors: FindAnchorsReturn;
}) {
  const Component = useMDXComponent(doc.body.code);
  return (
    <DocsLayout anchors={anchors} frontMatter={doc.frontMatter}>
      <Component components={mdxComponents} />
    </DocsLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = allDocs
    .map((t) => t._id.replace('docs/', '').replace('.mdx', ''))
    .map((id) => ({ params: { slug: id.split('/') } }));
  return { paths: docs, fallback: false };
};

export const getStaticProps = async (ctx: {
  params: { slug: string | string[] };
}) => {
  const params = Array.isArray(ctx.params.slug)
    ? ctx.params.slug
    : [ctx.params.slug];
  const doc = allDocs.find((doc) =>
    doc._id.endsWith(`${params.join('/')}.mdx`)
  );

  const anchors = FindAnchors();
  return { props: { doc, anchors } };
};
