import * as React from 'react';
import { Spinner } from '../spinner';
import { ButtonIcon } from './button-icon';
import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';
import { ButtonInnerStyle, ButtonInnerStyleProps } from './button.style';

const useButtonInner = createHook<ButtonInnerOptions>(
  ({ color, size, variant, shape, iconButton, ...props }) => {
    props = {
      ...props,
      className: ButtonInnerStyle({
        color,
        size,
        variant,
        shape,
        iconButton,
        class: props.className
      })
    };
    return props;
  }
);

const ButtonInner = createComponent<ButtonInnerOptions>((props) => {
  const htmlProps = useButtonInner(props);
  return createElement('button', htmlProps);
});

type ButtonInnerOptions<T extends As = 'button'> = Options<T> &
  ButtonInnerStyleProps;

type ButtonInnerProps<T extends As = 'button'> = Props<ButtonInnerOptions<T>>;

export type buttonLoadingState =
  | {
      /**
       * If `true`, the button will show a spinner.
       */
      loading: true;
      /**
       * The label to show in the button when `isLoading` is true
       * If no text is passed, it only shows the spinner
       */
      loadingText?: string;
      /**
       * It determines the placement of the spinner when isLoading is true
       * @default "start"
       */
      spinnerPlacement?: 'start' | 'end';
      /**
       * Replace the spinner component when `isLoading` is set to `true`
       * @type React.ReactElement
       */
      spinner?: JSX.Element;
    }
  | {
      /**
       * If `true`, the button will show a spinner.
       */
      loading?: false;
      /**
       * The label to show in the button when `isLoading` is true
       * If no text is passed, it only shows the spinner
       */
      loadingText?: never;
      /**
       * It determines the placement of the spinner when isLoading is true
       * @default "start"
       */
      spinnerPlacement?: never;
      /**
       * Replace the spinner component when `isLoading` is set to `true`
       * @type React.ReactElement
       */
      spinner?: never;
    };

export type ButtonProps = ButtonInnerProps & {
  /**
   * If added, the button will show an icon after the button's label.
   * @type React.ReactElement
   */
  rightIcon?: React.ReactElement;
  /**
   * If added, the button will show an icon before the button's label.
   * @type React.ReactElement
   */
  leftIcon?: React.ReactElement;
} & buttonLoadingState;

export const Button = createComponent<ButtonProps>(
  ({
    leftIcon,
    rightIcon,
    disabled,
    loading,
    loadingText,
    children,
    type,
    variant,
    spinner,
    spinnerPlacement,
    color,
    ...rest
  }) => {
    const isLoading = loading === true;
    return (
      <ButtonInner
        disabled={loading || disabled}
        color={color}
        type={type ?? 'button'}
        variant={variant}
        {...rest}
      >
        {leftIcon ? <ButtonIcon className="mr-2">{leftIcon}</ButtonIcon> : null}
        {isLoading && loadingText ? (
          <>
            {spinnerPlacement === 'end' ? (
              <>
                {loadingText}
                <span className="ml-2">
                  {spinner ? <>{spinner} </> : <Spinner color="transparent" />}
                </span>
              </>
            ) : (
              <>
                <span className="mr-2">
                  {spinner ? <>{spinner} </> : <Spinner color="transparent" />}
                </span>
                {loadingText}
              </>
            )}
          </>
        ) : isLoading ? (
          <>
            {spinner ? (
              <>
                {spinner} <span className="sr-only">Loading...</span>
              </>
            ) : (
              <>
                <Spinner color="transparent" />
                <span className="sr-only">Loading...</span>
              </>
            )}
          </>
        ) : (
          <>{children}</>
        )}

        {rightIcon ? (
          <ButtonIcon className="ml-2 ">{rightIcon}</ButtonIcon>
        ) : null}
      </ButtonInner>
    );
  }
);
