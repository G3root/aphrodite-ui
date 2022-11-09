import Link from 'next/link';
import { ReactNode } from 'react';

export interface SideBarItemProps {
  href: string;
  isCurrentPage: boolean;
  children: ReactNode;
}

export function SideBarItem(props: SideBarItemProps) {
  const { href, isCurrentPage, children } = props;
  return (
    <li>
      <Link
        aria-current={isCurrentPage}
        className='py-2 px-3 hover:bg-primary-4 aria-[current="true"]:bg-primary-4 flex rounded-md aria-[current="true"]:font-bold'
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
