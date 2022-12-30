import { cx } from '~/system';
import { ComponentProps, forwardRef } from 'react';

export type TagLabelProps = ComponentProps<'span'>;

export const TagLabel = forwardRef<HTMLSpanElement, TagLabelProps>(
  function TagLabel(props, ref) {
    const { className, children, ...rest } = props;

    return (
      <span ref={ref} className={cx('line-clamp-1', className)} {...rest}>
        {children}
      </span>
    );
  }
);
