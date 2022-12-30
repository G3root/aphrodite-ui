import { ComponentProps, forwardRef } from 'react';
import { Spinner } from '../spinner';
import { ButtonIcon } from './button-icon';
import { ButtonStyleProps, buttonStyle } from './button.style';

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

export type ButtonProps = ComponentProps<'button'> &
  ButtonStyleProps & {
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
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
      size,
      shape,
      iconButton,
      className,
      ...rest
    } = props;

    const isLoading = loading === true;

    return (
      <button
        ref={ref}
        className={buttonStyle({
          color,
          size,
          variant,
          shape,
          iconButton,
          class: className
        })}
        disabled={loading || disabled}
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
      </button>
    );
  }
);
