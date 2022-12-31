import { Center } from '@aphrodite-ui/react';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Center> = {
  title: 'Components/Layout/Center',
  component: Center,
  args: {
    children: 'Centered Box',
    className: 'bg-red-600 h-52 w-full'
  }
};

export default meta;

export const Template = {};
