import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';
import { SpinnerInnerStyle, SpinnerInnerStyleProps } from './spinner.style';

const useSpinnerInner = createHook<SpinnerInnerOptions>(
  ({ color, size, ...props }) => {
    props = {
      ...props,
      className: SpinnerInnerStyle({
        size,
        class: props.className
      })
    };
    return props;
  }
);

const SpinnerInner = createComponent<SpinnerInnerOptions>((props) => {
  const htmlProps = useSpinnerInner(props);
  return createElement('svg', htmlProps);
});

type SpinnerInnerOptions<T extends As = 'svg'> = Options<T> &
  SpinnerInnerStyleProps;

type SpinnerInnerProps<T extends As = 'svg'> = Props<SpinnerInnerOptions<T>>;

export interface SpinnerProps extends SpinnerInnerProps {
  label?: string;
}

export const Spinner = createComponent<SpinnerProps>(({ label, ...props }) => {
  return (
    <SpinnerInner
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
      {...props}
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
    </SpinnerInner>
  );
});
