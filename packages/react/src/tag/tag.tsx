import { tagStyle, tagStyleProps } from './tag.style';
import { TagSizeProvider } from './tag-context';
import { ComponentProps, forwardRef } from 'react';

export type TagProps = ComponentProps<'span'> & tagStyleProps;

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  props,
  ref
) {
  const { size, color, variant, children, shape, ...rest } = props;
  const className_ = tagStyle({
    color,
    size,
    variant,
    shape,
    class: props.className
  });
  return (
    <TagSizeProvider value={{ size, color, variant }}>
      <span ref={ref} className={className_} {...rest}>
        {children}
      </span>
    </TagSizeProvider>
  );
});
