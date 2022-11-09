import { cx, aphro, forwardRef, HTMLPolymorphicProps } from '~/system';

export interface VisuallyHiddenProps extends HTMLPolymorphicProps<'span'> {}

export const VisuallyHidden = forwardRef<'span', VisuallyHiddenProps>(
  function VisuallyHidden(props) {
    const { as, children, className } = props;
    return (
      <aphro.span as={as} className={cx('sr-only', className)}>
        {children}
      </aphro.span>
    );
  }
);
