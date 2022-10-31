import { Button, ButtonProps, buttonLoadingState } from '../button';

import * as React from 'react';
import { createComponent } from '../utils';

type OmittedProps = 'leftIcon' | 'rightIcon' | 'ref' | 'shape';

interface BaseButtonProps extends Omit<ButtonProps, OmittedProps> {}

interface IconButtonBase extends BaseButtonProps {
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
}

export type IconButtonProps = IconButtonBase & buttonLoadingState;

export const IconButton = createComponent<IconButtonProps>(
  ({ icon, children, rounded, 'aria-label': ariaLabel, ...rest }) => {
    /**
     * Passing the icon as prop or children should work
     */
    const childrenElement = children as unknown as SVGElement;
    const element = icon || childrenElement;

    const _children = React.isValidElement(element)
      ? React.cloneElement<any>(element, {
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
      >
        {_children}
      </Button>
    );
  }
);
