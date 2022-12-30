import { useTagSizeContext } from './tag-context';
import { Icon } from '../icon';
import {
  tagCloseButtonStyle,
  tagCloseButtonStyleProps
} from './tag-close-button.style';
import { ComponentProps, forwardRef } from 'react';

const TagCloseIcon = () => {
  return (
    <Icon
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className="h-[0.90rem]"
      focusable={false}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </Icon>
  );
};

export type TagCloseButtonProps = ComponentProps<'button'> &
  tagCloseButtonStyleProps;

export const TagCloseButton = forwardRef<
  HTMLButtonElement,
  TagCloseButtonProps
>(function TagCloseButton(props, ref) {
  const { type, 'aria-label': ariaLabel, children, className, ...rest } = props;
  const { size, color, variant } = useTagSizeContext();
  const className_ = tagCloseButtonStyle({
    size,
    color,
    variant,
    class: className
  });
  return (
    <button
      ref={ref}
      aria-label={ariaLabel ? ariaLabel : 'close'}
      type={type ? type : 'button'}
      className={className_}
      {...rest}
    >
      {children === undefined ? <TagCloseIcon /> : <>{children}</>}
    </button>
  );
});
