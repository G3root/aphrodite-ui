import { Icon, IconProps } from '../icon';
import { cx } from '~/system';
import { forwardRef } from 'react';

export type TagIconLeftProps = IconProps;
export const TagIconLeft = forwardRef<SVGSVGElement, IconProps>(
  function TagIconLeft(props, ref) {
    const { className, ...rest } = props;
    const _className = cx(className, 'inline-block h-4 w-4 mr-2');
    return <Icon className={_className} {...rest} ref={ref} />;
  }
);

export type TagIconRightProps = IconProps;

export const TagIconRight = forwardRef<SVGSVGElement, TagIconRightProps>(
  function TagIconRight(props, ref) {
    const { className, ...rest } = props;
    const _className = cx(className, 'inline-block h-4 w-4 ml-2');
    return <Icon className={_className} {...rest} ref={ref} />;
  }
);
