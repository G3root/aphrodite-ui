import { VariantProps } from '../utils';
import { cva } from '~/system';

export const spinnerStyle = cva('animate-spin motion-reduce:hidden ', {
  variants: {
    color: {
      primary: 'text-primary-11',
      info: 'text-info-11',
      success: 'text-success-11',
      warning: 'text-warning-11',
      danger: 'text-danger-11',
      neutral: 'text-neutral-11',
      white: 'text-white',
      black: 'text-black',
      transparent: ''
    },
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12'
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'white'
  }
});

export type SpinnerStyleProps = VariantProps<typeof spinnerStyle>;
