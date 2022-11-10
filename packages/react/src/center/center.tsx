import { cx, aphro, forwardRef, HTMLPolymorphicProps } from '~/system';

export interface CenterProps extends HTMLPolymorphicProps<'div'> {}

export const Center = forwardRef<'div', CenterProps>(function Center(
  props,
  ref
) {
  const { children, as, className, ...rest } = props;
  return (
    <aphro.div
      as={as}
      ref={ref}
      className={cx('flex items-center justify-center', className)}
      {...rest}
    >
      {children}
    </aphro.div>
  );
});
