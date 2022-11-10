import { VariantProps as CvaVariantProps } from '~/system';

export type VariantProps<T extends (...args: any) => any> = Omit<
  CvaVariantProps<T>,
  'class'
>;
