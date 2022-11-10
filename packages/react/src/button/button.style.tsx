import { VariantProps } from '../utils';
import { cva } from '~/system';

export const buttonStyle = cva(
  'flex items-center font-medium text-center disabled:cursor-not-allowed',
  {
    variants: {
      color: {
        primary: '',
        info: '',
        success: '',
        warning: '',
        danger: '',
        neutral: ''
      },
      shape: {
        square: 'rounded-lg',
        pill: 'rounded-full'
      },
      size: {
        xs: 'py-2 px-3 text-xs',
        sm: 'py-2 px-3 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'py-3 px-5 text-base',
        xl: 'px-6 py-3.5 text-base'
      },
      variant: {
        solid: 'btn-sld',
        flat: 'btn-flt',
        ghost: 'btn-gho motion-safe:transition duration-200',
        outline: 'btn-out border motion-safe:transition duration-200',
        link: 'btn-lin'
      },
      iconButton: {
        true: ''
      }
    },
    compoundVariants: [
      //✨ solid variant
      {
        variant: 'solid',
        color: 'primary',
        class: [
          'bg-primary-9',
          'not-disabled:hover:bg-primary-10',
          'text-white'
        ]
      },
      {
        variant: 'solid',
        color: 'info',
        class: ['bg-info-9', 'not-disabled:hover:bg-info-10', 'text-white']
      },
      {
        variant: 'solid',
        color: 'success',
        class: [
          'bg-success-9',
          'not-disabled:hover:bg-success-10',
          'text-white'
        ]
      },
      {
        variant: 'solid',
        color: 'warning',
        class: [
          'bg-warning-9',
          'not-disabled:hover:bg-warning-10',
          'text-black'
        ]
      },
      {
        variant: 'solid',
        color: 'danger',
        class: ['bg-danger-9', 'not-disabled:hover:bg-danger-10', 'text-white']
      },
      {
        variant: 'solid',
        color: 'neutral',
        class: [
          'bg-[var(--sld-btn-neu-bg)]',
          'not-disabled:hover:bg-[var(--sld-btn-neu-hov-bg)]',
          'text-white'
        ]
      },

      //✨ flat variant
      {
        variant: 'flat',
        color: 'primary',
        class: [
          'bg-primary-3',
          'text-primary-11',
          'not-disabled:hover:bg-primary-4'
        ]
      },
      {
        variant: 'flat',
        color: 'info',
        class: ['bg-info-3', 'text-info-11', 'not-disabled:hover:bg-info-4']
      },
      {
        variant: 'flat',
        color: 'success',
        class: [
          'bg-success-3',
          'text-success-11',
          'not-disabled:hover:bg-success-4'
        ]
      },
      {
        variant: 'flat',
        color: 'warning',
        class: [
          'bg-warning-3',
          'text-warning-11',
          'not-disabled:hover:bg-warning-4'
        ]
      },
      {
        variant: 'flat',
        color: 'danger',
        class: [
          'bg-danger-3',
          'text-danger-11',
          'not-disabled:hover:bg-danger-4'
        ]
      },
      {
        variant: 'flat',
        color: 'neutral',
        class: [
          'bg-neutral-3',
          'text-neutral-11',
          'not-disabled:hover:bg-neutral-4'
        ]
      },
      //✨ outline variant
      {
        variant: 'outline',
        color: 'primary',
        class: [
          'text-primary-11',
          'not-disabled:hover:bg-primary-4',
          'not-disabled:hover:border-primary-8',
          'border',
          'border-primary-7'
        ]
      },
      {
        variant: 'outline',
        color: 'info',
        class: [
          'text-info-11',
          'not-disabled:hover:bg-info-4',
          'not-disabled:hover:border-info-8',
          'border',
          'border-info-7'
        ]
      },
      {
        variant: 'outline',
        color: 'success',
        class: [
          'text-success-11',
          'not-disabled:hover:bg-success-4',
          'not-disabled:hover:border-success-8',
          'border',
          'border-success-7'
        ]
      },
      {
        variant: 'outline',
        color: 'warning',
        class: [
          'text-warning-11',
          'not-disabled:hover:bg-warning-4',
          'not-disabled:hover:border-warning-8',
          'border',
          'border-warning-7'
        ]
      },
      {
        variant: 'outline',
        color: 'danger',
        class: [
          'text-danger-11',
          'not-disabled:hover:bg-danger-4',
          'not-disabled:hover:border-danger-8',
          'border',
          'border-danger-7'
        ]
      },
      {
        variant: 'outline',
        color: 'neutral',
        class: [
          'text-neutral-12',
          'not-disabled:hover:bg-neutral-4',
          'not-disabled:hover:border-neutral-8',
          'border',
          'border-neutral-7'
        ]
      },

      //✨ link variant
      {
        variant: 'link',
        color: 'primary',
        class: 'text-primary-11'
      },
      {
        variant: 'link',
        color: 'info',
        class: ['text-info-11', 'not-disabled:hover:underline']
      },
      {
        variant: 'link',
        color: 'success',
        class: ['text-success-11', 'not-disabled:hover:underline']
      },
      {
        variant: 'link',
        color: 'warning',
        class: ['text-warning-11', 'not-disabled:hover:underline']
      },
      {
        variant: 'link',
        color: 'danger',
        class: ['text-danger-11', 'not-disabled:hover:underline']
      },
      {
        variant: 'link',
        color: 'neutral',
        class: ['text-neutral-12', 'not-disabled:hover:underline']
      },
      //✨ Ghost variant
      {
        variant: 'ghost',
        color: 'primary',
        class: ['text-primary-11', 'not-disabled:hover:bg-primary-4']
      },
      {
        variant: 'ghost',
        color: 'info',
        class: ['text-info-11', 'not-disabled:hover:bg-info-4']
      },
      {
        variant: 'ghost',
        color: 'success',
        class: ['text-success-11', 'not-disabled:hover:bg-success-4']
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: ['text-warning-11', 'not-disabled:hover:bg-warning-4']
      },
      {
        variant: 'ghost',
        color: 'danger',
        class: ['text-danger-11', 'not-disabled:hover:bg-danger-4']
      },
      {
        variant: 'ghost',
        color: 'neutral',
        class: ['text-neutral-12', 'not-disabled:hover:bg-neutral-4']
      },

      // rounded button size
      {
        iconButton: true,
        size: 'xs',
        class: '!p-1.5'
      },
      {
        iconButton: true,
        size: 'sm',
        class: '!p-2'
      },
      {
        iconButton: true,
        size: 'md',
        class: '!p-3'
      },
      {
        iconButton: true,
        size: 'lg',
        class: '!p-4'
      },
      {
        iconButton: true,
        size: 'xl',
        class: '!p-5'
      }
    ],
    defaultVariants: {
      color: 'primary',
      shape: 'square',
      size: 'md',
      variant: 'solid'
    }
  }
);

export type ButtonStyleProps = VariantProps<typeof buttonStyle>;
