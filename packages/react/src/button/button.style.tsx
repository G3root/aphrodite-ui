import { VariantProps } from '../utils';
import { cva } from 'cva';

export const ButtonInnerStyle = cva(
  'flex items-center font-medium text-center disabled:cursor-not-allowed btn ',
  {
    variants: {
      color: {
        primary: 'btn-pri',
        info: 'btn-inf',
        success: 'btn-suc',
        warning: 'btn-war',
        danger: 'btn-dan',
        neutral: 'btn-neu'
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

export type ButtonInnerStyleProps = VariantProps<typeof ButtonInnerStyle>;
