import { cx } from '~/system';

import { forwardRef, ComponentProps } from 'react';
const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: '0 0 24 24'
};

export type IconProps = ComponentProps<'svg'> & {
  icon?: React.ElementType;
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  props,
  ref
) {
  const {
    children,
    viewBox,
    focusable,
    className,
    icon: Element,
    ...rest
  } = props;
  const _viewBox = viewBox ?? fallbackIcon.viewBox;
  const _className = cx(
    'inline-block flex-shrink-0 box text-current leading-4 align-middle',
    className
  );

  const shared = {
    focusable,
    className: _className
  };
  if (Element) {
    return <Element {...shared} {...rest} />;
  }
  const _path = (children ?? fallbackIcon.path) as React.ReactNode;

  return (
    <svg viewBox={_viewBox} {...shared} {...rest} ref={ref}>
      {_path}
    </svg>
  );
});
