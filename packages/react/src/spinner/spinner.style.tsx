import { VariantProps } from '../utils';
import { cva } from '~/system';

export const spinnerStyle = cva('animate-spin motion-reduce:hidden ', {
  variants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export type SpinnerStyleProps = VariantProps<typeof spinnerStyle>;
