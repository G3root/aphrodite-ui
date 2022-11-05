import { allDocs, Doc } from 'contentlayer/generated';

interface Document extends Omit<Doc, 'frontMatter'> {
  frontMatter: {
    category: string;
    headings: { id: string }[];
  };
}

export function FindAnchors() {
  const titles: {
    [key: string]: string[];
  } = {};
  for (let Doc of allDocs) {
    const Document = Doc as Document;

    const headings = Document.frontMatter.headings.map((val) => val.id);
    const key = Document.frontMatter.category;
    titles[key] = headings;
  }
  return titles;
}

export type FindAnchorsReturn = ReturnType<typeof FindAnchors>;
