import { polymorphicFactory, forwardRef } from '@polymorphic-factory/react';
import { cva, cx } from 'cva';

import type { CxOptions, CxReturn, VariantProps } from 'cva';
import type {
  AssignCommon,
  ComponentWithAs,
  DOMElements,
  HTMLPolymorphicComponents,
  HTMLPolymorphicProps,
  MergeWithAs,
  OmitCommonProps,
  PropsOf
} from '@polymorphic-factory/react';

export const aphro = polymorphicFactory();

export {
  AssignCommon,
  ComponentWithAs,
  DOMElements,
  HTMLPolymorphicComponents,
  HTMLPolymorphicProps,
  MergeWithAs,
  OmitCommonProps,
  PropsOf,
  forwardRef,
  cva,
  cx,
  CxOptions,
  CxReturn,
  VariantProps
};
