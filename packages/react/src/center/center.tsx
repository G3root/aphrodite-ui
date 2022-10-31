import {
  createComponent,
  createElement,
  createHook,
  As,
  Options,
  Props
} from '../utils';
import { cx } from 'cva';

const useCenter = createHook<CenterOptions>((props) => {
  props = {
    ...props,
    className: cx('flex items-center justify-center', props.className)
  };
  return props;
});

export const Center = createComponent<CenterOptions>((props) => {
  const htmlProps = useCenter(props);
  return createElement('div', htmlProps);
});

type CenterOptions<T extends As = 'div'> = Options<T>;

export type CenterProps<T extends As = 'div'> = Props<CenterOptions<T>>;
