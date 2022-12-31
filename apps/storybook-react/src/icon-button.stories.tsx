import { IconButton } from '@aphrodite-ui/react';
import type { Meta } from '@storybook/react';
import Icon from './MockIcon';
import ButtonMeta from './button.stories';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Forms/Icon Button',
  component: IconButton,
  args: {
    'aria-label': 'icon button',
    icon: <Icon className="h-4 w-4" />
  },
  argTypes: {
    ...ButtonMeta.argTypes,
    'aria-label': {
      control: { type: 'text' }
    }
  }
};

export default meta;

export const Template = {};

export const Colors = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      color="primary"
      aria-label="primary"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      color="neutral"
      aria-label="neutral"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      aria-label="info"
      color="info"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      aria-label="success"
      color="success"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      aria-label="warning"
      color="warning"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      aria-label="danger"
      color="danger"
    />
  </div>
);

export const Sizes = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      size="xs"
      aria-label="xs button"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      size="sm"
      aria-label="sm button"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      size="md"
      aria-label="md button"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      size="lg"
      aria-label="lg button"
    />
    <IconButton
      icon={<Icon className="h-4 w-4" />}
      size="xl"
      aria-label="xl button"
    />
  </div>
);

export const Variants = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-2 flex-wrap">
      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="solid"
        color="primary"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="solid"
        color="neutral"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="solid"
        color="info"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="solid"
        color="success"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="solid"
        color="warning"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="solid"
        color="danger"
      />
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="flat"
        color="primary"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="flat"
        color="neutral"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="flat"
        color="info"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="flat"
        color="success"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="flat"
        color="warning"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="flat"
        color="danger"
      />
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="outline"
        color="primary"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="outline"
        color="neutral"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="outline"
        color="info"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="outline"
        color="success"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="outline"
        color="warning"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="outline"
        color="danger"
      />
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="link"
        color="primary"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="link"
        color="neutral"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="link"
        color="info"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="link"
        color="success"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="link"
        color="warning"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="link"
        color="danger"
      />
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="ghost"
        color="primary"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="ghost"
        color="neutral"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="ghost"
        color="info"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="ghost"
        color="success"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="ghost"
        color="warning"
      />

      <IconButton
        icon={<Icon className="h-4 w-4" />}
        aria-label=""
        variant="ghost"
        color="danger"
      />
    </div>
  </div>
);
