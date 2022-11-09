import { SideBarTitle } from './side-bar-title';
import { routes } from '~/configs';
import { useRouter } from 'next/router';
import { SideBarItem } from './side-bar-item';

interface SubItemsProps {
  title: string;
  path: string;
  isCurrentPage: boolean;
}

function SubItems(props: SubItemsProps) {
  const { path, title, isCurrentPage } = props;
  return (
    <SideBarItem href={path} isCurrentPage={isCurrentPage}>
      {title}
    </SideBarItem>
  );
}

function SidebarList() {
  const { asPath } = useRouter();
  const route = asPath.split('#')[0];
  return (
    <ul role="list" className="space-y-4">
      {routes.map((item) => (
        <li key={item.title}>
          <SideBarTitle>{item.title}</SideBarTitle>

          {item.routes?.length ? (
            <ul role="list" className="mt-2 space-y-1">
              {item.routes.map(({ path, title }) => (
                <SubItems
                  key={path}
                  path={path}
                  title={title}
                  isCurrentPage={route === path}
                />
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function SideBar() {
  return (
    <div className="hidden lg:relative lg:block lg:flex-none">
      <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
        <nav className="text-base lg:text-sm w-64 pr-8">
          <SidebarList />
        </nav>
      </div>
    </div>
  );
}
