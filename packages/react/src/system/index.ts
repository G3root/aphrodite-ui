import { polymorphicFactory, forwardRef } from '@polymorphic-factory/react';
import { cva, cx } from 'cva';

import type { CxOptions, CxReturn, VariantProps } from 'cva';
import type {
  ComponentWithAs,
  HTMLPolymorphicComponents,
  HTMLPolymorphicProps,
  PropsOf,
  Assign
} from '@polymorphic-factory/react';

export const aphro = polymorphicFactory();

export {
  Assign,
  ComponentWithAs,
  HTMLPolymorphicComponents,
  HTMLPolymorphicProps,
  PropsOf,
  forwardRef,
  cva,
  cx,
  CxOptions,
  CxReturn,
  VariantProps
};
