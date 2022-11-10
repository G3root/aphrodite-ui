import { SpinnerStyleProps, spinnerStyle } from './spinner.style';
import { forwardRef, aphro, HTMLPolymorphicProps } from '~/system';

type SpinnerProps = HTMLPolymorphicProps<'svg'> &
  SpinnerStyleProps & {
    label?: string;
  };

export const Spinner = forwardRef<'svg', SpinnerProps>(function Spinner(
  props,
  ref
) {
  const { label, as, className, size, color, ...rest } = props;
  return (
    <aphro.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      ref={ref}
      viewBox="0 0 24 24"
      aria-hidden
      as={as}
      className={spinnerStyle({ size, color, class: className })}
      {...rest}
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
      {label ? <span className="sr-only">{label}</span> : null}
    </aphro.svg>
  );
});
