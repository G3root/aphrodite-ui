import * as React from 'react';
import { cx } from 'cva';

export interface ButtonIconProps extends React.ComponentProps<'span'> {
  children: React.ReactNode;
}

export function ButtonIcon({ children, className, ...rest }: ButtonIconProps) {
  const _children = React.isValidElement(children)
    ? React.cloneElement<any>(children, {
        'aria-hidden': true,
        focusable: false
      })
    : children;

  return (
    <span
      className={cx('inline-flex self-center flex-shrink-0', className)}
      {...rest}
    >
      {_children}
    </span>
  );
}
