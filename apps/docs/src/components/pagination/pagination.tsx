import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { paginate } from '~/utils';

export function usePagination() {
  const { asPath } = useRouter();
  const { prev, next } = paginate({ path: asPath });
  return { prev, next };
}

export function Pagination() {
  const { prev, next } = usePagination();
  return (
    <div className="pt-8 mt-16 mb-8 border-t border-neutral-7 flex flex-row items-center justify-between">
      <div className="flex-1 min-w-0">
        {prev ? (
          <Link
            className="text-lg font-medium p-4 -m-4 no-underline transition-colors text-info-10 hover:text-info-11  flex items-center mr-2"
            rel="prev"
            href={prev.path}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              height={24}
              className="transform inline flex-shrink-0 rotate-180 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {prev.title}
          </Link>
        ) : null}
      </div>
      <div className="flex-1 min-w-0 text-right">
        {next ? (
          <Link
            rel="next"
            className="text-lg font-medium p-4 -m-4 no-underline transition-colors text-info-10 hover:text-info-11 inline-flex items-center ml-2"
            href={next.path}
          >
            {next.title}
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              height={24}
              className="transform inline flex-shrink-0 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
