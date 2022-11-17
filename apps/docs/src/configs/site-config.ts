const baseConfig = {
  repo: 'https://github.com/G3root/aphrodite-ui',
  title: 'Aphrodite UI - Rapidly prototypes without a hassle.',
  description:
    'A Collection of high-quality accessible UI components built with Tailwind CSS',
  url: 'https://aphrodite-ui.vercel.com'
};
export const siteConfig = {
  repo: {
    url: baseConfig.url,
    editUrl: `${baseConfig.repo}/edit/main/apps/docs/content/docs`,
    blobUrl: `${baseConfig.repo}/blob/main/apps/docs/content/docs`
  },
  seo: {
    title: baseConfig.title,
    titleTemplate: '%s - Aphrodite-UI',
    description: baseConfig.description,
    siteUrl: baseConfig.url
  }
};
