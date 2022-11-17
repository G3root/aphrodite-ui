import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

const elements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'ol',
  'ul',
  'pre',
  'li',
  'a',
  'code',
  'detail',
  'blockquote'
];

const elementSet = new Set(elements);

export const rehypeDocsClass: Plugin = () => {
  return (tree) => {
    visit(tree, 'element', (node: any) => {
      if (!elementSet.has(node.tagName)) return;
      node.properties = node.properties || {};
      node.properties['className'] = 'docs';
    });
  };
};
