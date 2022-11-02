import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';

import { cx } from 'cva';

const useVisuallyHidden = createHook<VisuallyHiddenOptions>((props) => {
  props = {
    ...props,
    className: cx('sr-only', props.className)
  };
  return props;
});

export const VisuallyHidden = createComponent<VisuallyHiddenOptions>(
  (props) => {
    const htmlProps = useVisuallyHidden(props);
    return createElement('span', htmlProps);
  }
);

type VisuallyHiddenOptions<T extends As = 'span'> = Options<T>;

export type VisuallyHiddenProps<T extends As = 'span'> = Props<
  VisuallyHiddenOptions<T>
>;
