import { ReactNode } from 'react';

interface SideBarTitleProps {
  children: ReactNode;
}

export function SideBarTitle(props: SideBarTitleProps) {
  const { children } = props;
  return <h2 className="font-medium text-neutral-11">{children}</h2>;
}
