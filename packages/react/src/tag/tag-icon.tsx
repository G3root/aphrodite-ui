import { Icon, IconProps } from '../icon';
import { forwardRef, cx } from '~/system';

export type TagIconLeftProps = IconProps;
export const TagIconLeft = forwardRef<'svg', IconProps>(function TagIconLeft(
  props,
  ref
) {
  const { as, className, ...rest } = props;
  const _className = cx(className, 'inline-block h-4 w-4 mr-2');
  return <Icon ref={ref} className={_className} {...rest} />;
});

export type TagIconRightProps = IconProps;

export const TagIconRight = forwardRef<'svg', TagIconRightProps>(
  function TagIconRight(props, ref) {
    const { as, className, ...rest } = props;
    const _className = cx(className, 'inline-block h-4 w-4 ml-2');
    return <Icon ref={ref} className={_className} {...rest} />;
  }
);
