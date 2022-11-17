// credits: https://github.com/chakra-ui/chakra-ui-docs/blob/main/src/utils/get-table-of-contents.ts

import { slug } from 'github-slugger';

export function getTableOfContents(mdxContent: string) {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');
  // @ts-ignore
  const headings = [...mdxContent.matchAll(regexp)];
  let tableOfContents: any[] = [];

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const headingText = heading[2].trim();
      const headingType = heading[1].trim() === '##' ? 'h2' : 'h3';
      const headingLink = slug(headingText, false);

      return {
        text: headingText,
        id: headingLink,
        level: headingType
      };
    });
  }

  return tableOfContents;
}
