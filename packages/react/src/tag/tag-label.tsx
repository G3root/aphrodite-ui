import { cx, forwardRef, aphro, HTMLPolymorphicProps } from '~/system';

export type TagLabelProps = HTMLPolymorphicProps<'span'>;

export const TagLabel = forwardRef<'span', TagLabelProps>(function TagLabel(
  props,
  ref
) {
  const { className, children, ...rest } = props;
  return (
    <aphro.span ref={ref} className={cx('line-clamp-1', className)} {...rest}>
      {children}
    </aphro.span>
  );
});
