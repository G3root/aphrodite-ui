import { ComponentProps, forwardRef } from 'react';
import { cva } from '~/system';

export interface CenterProps extends ComponentProps<'div'> {}

export const centerStyle = cva('flex items-center justify-center');

export const Center = forwardRef<HTMLDivElement, CenterProps>(function Center(
  props,
  ref
) {
  const { children, className, ...rest } = props;
  return (
    <div ref={ref} className={centerStyle({ className })} {...rest}>
      {children}
    </div>
  );
});
