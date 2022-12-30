import { ComponentProps, forwardRef } from 'react';
import { cva } from '~/system';

export const visuallyHiddenButtonStyle = cva('sr-only');

export interface VisuallyHiddenProps extends ComponentProps<'span'> {}

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  function VisuallyHidden(props, ref) {
    const { children, className } = props;

    return (
      <span ref={ref} className={visuallyHiddenButtonStyle({ className })}>
        {children}
      </span>
    );
  }
);
