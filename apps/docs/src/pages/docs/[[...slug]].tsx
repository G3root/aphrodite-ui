import { GetStaticPaths } from 'next';
import { allDocs, Doc } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { DocsLayout } from '~/layouts';
import { mdxComponents } from '~/components';
import { FindAnchors, FindAnchorsReturn } from '~/utils';

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
