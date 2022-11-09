import { cx, aphro, forwardRef, HTMLPolymorphicProps } from '~/system';

export interface CenterProps extends HTMLPolymorphicProps<'div'> {}

export const Center = forwardRef<'div', CenterProps>(function Center(props) {
  const { children, as, className, ...rest } = props;
  return (
    <aphro.div
      as={as}
      className={cx('flex items-center justify-center', className)}
      {...rest}
    >
      {children}
    </aphro.div>
  );
});
