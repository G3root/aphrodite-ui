import { Button, ButtonProps, buttonLoadingState } from '../button';

import { cloneElement, forwardRef, isValidElement } from 'react';

type OmittedProps = 'leftIcon' | 'rightIcon' | 'shape';

type BaseButtonProps = Omit<ButtonProps, OmittedProps>;

type IconButtonBase = {
  /**
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
  /**
   * If `true`, the button will be perfectly round. Else, it'll be slightly round
   */
  rounded?: boolean;
  /**
   * A11y: A label that describes the button
   */
  'aria-label': string;
};

export type IconButtonProps = IconButtonBase &
  buttonLoadingState &
  BaseButtonProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { icon, children, rounded, 'aria-label': ariaLabel, ...rest } = props;

    const element = icon || children;
    const _children = isValidElement(element)
      ? cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false
        })
      : null;

    return (
      <Button
        shape={rounded ? 'pill' : 'square'}
        aria-label={ariaLabel}
        iconButton
        {...rest}
        ref={ref}
      >
        {_children}
      </Button>
    );
  }
);
