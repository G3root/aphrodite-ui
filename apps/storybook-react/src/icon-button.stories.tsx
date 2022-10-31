import { IconButton, IconButtonProps } from '@aphrodite-ui/react';

import Icon from './MockIcon';
import type { Story } from '@ladle/react';

export default {
  title: 'Components/Forms/Icon Button'
};

export const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args} />
);

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

Template.args = {
  'aria-label': 'Button',
  icon: <Icon style={{ height: '1em', width: '1em' }} />
};

Template.argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['solid', 'flat', 'ghost', 'outline', 'link']
  },
  color: {
    control: { type: 'select' },
    options: ['primary', 'neutral', 'success', 'info', 'warning', 'danger']
  },
  size: {
    control: { type: 'select' },
    options: ['xs', 'sm', 'md', 'lg', 'xl']
  },
  spinnerPlacement: {
    control: { type: 'radio' },
    options: ['start', 'end']
  }

  // loading: {
  //   control: { type: 'boolean' }
  // },

  // disabled: {
  //   control: { type: 'boolean' }
  // },
  // loadingText: {
  //   control: 'text'
  // },
  // rounded: {
  //   control: { type: 'boolean' }
  // },
  // icon: {
  //   control: { type: 'object' }
  // },
  // 'aria-label': {
  //   control: 'text'
  // }
};
