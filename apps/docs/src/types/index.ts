interface headings {
  text: string;
  id: string;
  level: string;
}

export interface DocFrontMatter {
  title: string;
  description: string;
  category: string;
  slug: string;
  headings: headings[];
  editUrl: string;
}
