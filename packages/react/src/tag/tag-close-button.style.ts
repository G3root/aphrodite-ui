import { VariantProps } from '~/utils';
import { cva } from '~/system';
export const tagCloseButtonStyle = cva(
  [
    'inline-flex items-center justify-center relative',
    'text-inherit ml-2 rounded-full',
    'motion-safe:transition duration-200'
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6'
      },
      variant: {
        solid: '',
        subtle: '',
        outline: ''
      },
      color: {
        primary: '',
        info: '',
        success: '',
        warning: '',
        danger: '',
        neutral: ''
      }
    },
    compoundVariants: [
      //subtle variant
      {
        variant: 'subtle',
        color: 'primary',
        class: 'hover:bg-primary-6'
      },
      {
        variant: 'subtle',
        color: 'info',
        class: 'hover:bg-info-6'
      },
      {
        variant: 'subtle',
        color: 'success',
        class: 'hover:bg-success-6'
      },
      {
        variant: 'subtle',
        color: 'warning',
        class: 'hover:bg-warning-6'
      },
      {
        variant: 'subtle',
        color: 'danger',
        class: 'hover:bg-danger-6'
      },
      {
        variant: 'subtle',
        color: 'neutral',
        class: 'hover:bg-neutral-7'
      },
      //solid variant
      {
        variant: 'solid',
        color: 'primary',
        class: 'hover:bg-primary-10 text-white'
      },
      {
        variant: 'solid',
        color: 'info',
        class: 'hover:bg-info-10 text-white'
      },
      {
        variant: 'solid',
        color: 'success',
        class: 'hover:bg-success-10 text-white'
      },
      {
        variant: 'solid',
        color: 'warning',
        class: 'hover:bg-warning-10 text-black'
      },
      {
        variant: 'solid',
        color: 'danger',
        class: 'hover:bg-danger-10 text-white'
      },
      {
        variant: 'solid',
        color: 'neutral',
        class: 'hover:bg-neutral-11 text-white'
      },
      //outline variant
      {
        variant: 'outline',
        color: 'primary',
        class: 'hover:bg-primary-6 border border-primary-7 text-primary-11'
      },
      {
        variant: 'outline',
        color: 'info',
        class: 'hover:bg-info-6 border border-info-7 text-info-11'
      },
      {
        variant: 'outline',
        color: 'success',
        class: 'hover:bg-success-6 border border-success-7 text-success-11'
      },
      {
        variant: 'outline',
        color: 'warning',
        class: 'hover:bg-warning-6 border border-warning-7 text-warning-11'
      },
      {
        variant: 'outline',
        color: 'danger',
        class: 'hover:bg-danger-6 border border-danger-7 text-danger-11'
      },
      {
        variant: 'outline',
        color: 'neutral',
        class: 'hover:bg-neutral-6 border border-neutral-7 text-neutral-11'
      }
    ],

    defaultVariants: {
      color: 'neutral',
      variant: 'subtle',
      size: 'md'
    }
  }
);

export type tagCloseButtonStyleProps = VariantProps<typeof tagCloseButtonStyle>;
