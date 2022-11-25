import { forwardRef, aphro, HTMLPolymorphicProps } from '~/system';
import { tagStyle, tagStyleProps } from './tag.style';
import { TagSizeProvider } from './tag-context';

export type TagProps = HTMLPolymorphicProps<'span'> & tagStyleProps;

export const Tag = forwardRef<'span', TagProps>(function Tag(props, ref) {
  const { size, color, variant, as, children, shape, ...rest } = props;
  const className_ = tagStyle({
    color,
    size,
    variant,
    shape,
    class: props.className
  });
  return (
    <TagSizeProvider value={{ size, color, variant }}>
      <aphro.span as={as} ref={ref} className={className_} {...rest}>
        {children}
      </aphro.span>
    </TagSizeProvider>
  );
});
