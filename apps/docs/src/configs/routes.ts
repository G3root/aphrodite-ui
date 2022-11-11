export type RouteItem = { title: string; path: string };

export type Route = {
  title: string;
  routes?: RouteItem[];
};

export const routes: Route[] = [
  {
    title: 'Introduction',
    routes: [
      {
        title: 'Getting Started',
        path: '/docs/getting-started'
      }
    ]
  },
  {
    title: 'Layout',
    routes: [
      {
        title: 'Center',
        path: '/docs/components/layout/center'
      }
    ]
  },
  {
    title: 'Forms',

    routes: [
      {
        title: 'Button',
        path: '/docs/components/forms/button'
      },
      {
        title: 'Icon Button',
        path: '/docs/components/forms/icon-button'
      }
    ]
  },
  {
    title: 'Feedback',
    routes: [
      {
        title: 'Spinner',
        path: '/docs/components/feedback/spinner'
      }
    ]
  },
  {
    title: 'Disclosure',
    routes: [
      {
        title: 'Visually Hidden',
        path: '/docs/components/disclosure/visually-hidden'
      }
    ]
  }
];
