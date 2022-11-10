import { cx, aphro, forwardRef, HTMLPolymorphicProps } from '~/system';

export interface VisuallyHiddenProps extends HTMLPolymorphicProps<'span'> {}

export const VisuallyHidden = forwardRef<'span', VisuallyHiddenProps>(
  function VisuallyHidden(props, ref) {
    const { as, children, className } = props;
    return (
      <aphro.span ref={ref} as={as} className={cx('sr-only', className)}>
        {children}
      </aphro.span>
    );
  }
);
