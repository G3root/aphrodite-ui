import { DocFrontMatter } from '~/types';
import * as React from 'react';
import { Button, cx } from '@aphrodite-ui/react';

export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = React.useState<string>();
  const observer = React.useRef<IntersectionObserver | null>(null);
  React.useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    );
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute('id')!);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) observer.current?.observe(el);
    });
    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
}

interface TOCProps {
  headings: DocFrontMatter['headings'];
  editUrl: string;
}

interface ItemProps {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  level: string;
}

function Item(props: ItemProps) {
  const { children, isActive, href, level } = props;
  return (
    <li>
      <a
        className={cx(
          level === 'h3' ? 'pl-5' : '',
          isActive ? 'text-primary-11' : 'text-neutral-10 hover:text-neutral-11'
        )}
        href={href}
        aria-current={isActive ? 'location' : undefined}
        // onClick={(e) => {
        //   e.preventDefault();

        //   const element = document.querySelector(href);
        //   if (element) {
        //     element.scrollIntoView({
        //       behavior: 'smooth'
        //     });
        //   }
        // }}
      >
        {children}
      </a>
    </li>
  );
}

export function TOC(props: TOCProps) {
  const { headings, editUrl } = props;
  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -60% 0%'
    }
  );
  return (
    <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        <h2
          id="on-this-page-title"
          className="font-display text-sm font-medium "
        >
          On this page
        </h2>
        <ol role="list" className="mt-4 space-y-3 text-sm">
          {headings.map(({ id, level, text }) => (
            <Item
              key={id}
              href={`#${id}`}
              level={level}
              isActive={id === activeId}
            >
              {text}
            </Item>
          ))}
        </ol>
      </nav>

      <div className="mt-8 mb-4 border border-neutral-6" />

      <Button
        as={'a'}
        href={editUrl}
        target="_blank"
        rel="noreferrer"
        color="neutral"
        className="px-0"
        variant="link"
      >
        Edit this page on GitHub
      </Button>
    </div>
  );
}
