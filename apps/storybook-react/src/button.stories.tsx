import { Button, ButtonProps } from '@aphrodite-ui/react';
import type { Story } from '@ladle/react';
import Icon from './MockIcon';

export default {
  title: 'Components/Forms/Button'
};

export const Template: Story<ButtonProps> = ({ children, ref, ...args }) => (
  // @ts-ignore
  <Button {...args}>{children} </Button>
);

Template.args = {
  children: 'Button'
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
  },
  shape: {
    control: { type: 'select' },
    options: ['square', 'pill']
  }
  // loading: {
  //   control: { type: 'boolean' }
  // },
  // disabled: {
  //   control: { type: 'boolean' }
  // },
  // loadingText: {
  //   control: { type: 'text' }
  // },
  // children: {
  //   control: { type: 'text' }
  // }
};

export const Colors = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button color="primary">Primary</Button>
    <Button color="neutral">Neutral</Button>
    <Button color="info">info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button size="xs">Button</Button>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
    <Button size="xl">Button</Button>
  </div>
);

export const Variants = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-2 flex-wrap">
      <Button variant="solid" color="primary">
        Primary
      </Button>
      <Button variant="solid" color="neutral">
        Neutral
      </Button>
      <Button variant="solid" color="info">
        Info
      </Button>
      <Button variant="solid" color="success">
        Success
      </Button>
      <Button variant="solid" color="warning">
        Warning
      </Button>
      <Button variant="solid" color="danger">
        Danger
      </Button>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <Button variant="flat" color="primary">
        Primary
      </Button>
      <Button variant="flat" color="neutral">
        Neutral
      </Button>
      <Button variant="flat" color="info">
        Info
      </Button>
      <Button variant="flat" color="success">
        Success
      </Button>
      <Button variant="flat" color="warning">
        Warning
      </Button>
      <Button variant="flat" color="danger">
        Danger
      </Button>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <Button variant="outline" color="primary">
        Primary
      </Button>
      <Button variant="outline" color="neutral">
        Neutral
      </Button>
      <Button variant="outline" color="info">
        Info
      </Button>
      <Button variant="outline" color="success">
        Success
      </Button>
      <Button variant="outline" color="warning">
        Warning
      </Button>
      <Button variant="outline" color="danger">
        Danger
      </Button>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <Button variant="link" color="primary">
        Primary
      </Button>
      <Button variant="link" color="neutral">
        Neutral
      </Button>
      <Button variant="link" color="info">
        Info
      </Button>
      <Button variant="link" color="success">
        Success
      </Button>
      <Button variant="link" color="warning">
        Warning
      </Button>
      <Button variant="link" color="danger">
        Danger
      </Button>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <Button variant="ghost" color="primary">
        Primary
      </Button>
      <Button variant="ghost" color="neutral">
        Neutral
      </Button>
      <Button variant="ghost" color="info">
        Info
      </Button>
      <Button variant="ghost" color="success">
        Success
      </Button>
      <Button variant="ghost" color="warning">
        Warning
      </Button>
      <Button variant="ghost" color="danger">
        Danger
      </Button>
    </div>
  </div>
);

export const IconPlacement = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button leftIcon={<Icon />} color="primary">
      Left Icon
    </Button>
    <Button rightIcon={<Icon />} color="neutral">
      Right Icon
    </Button>
  </div>
);

export const Loading = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button loading color="primary">
      Primary
    </Button>
    <Button loading color="neutral">
      Neutral
    </Button>
    <Button loading color="info">
      info
    </Button>
    <Button loading color="success">
      Success
    </Button>
    <Button loading color="warning">
      Warning
    </Button>
    <Button loading color="danger">
      Danger
    </Button>
  </div>
);

export const LoadingWithLoadingText = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button loadingText="loading..." loading color="primary">
      Primary
    </Button>
    <Button loadingText="loading..." loading color="neutral">
      Neutral
    </Button>
    <Button loadingText="loading..." loading color="info">
      info
    </Button>
    <Button loadingText="loading..." loading color="success">
      Success
    </Button>
    <Button loadingText="loading..." loading color="warning">
      Warning
    </Button>
    <Button loadingText="loading..." loading color="danger">
      Danger
    </Button>
  </div>
);

export const SpinnerPlacement = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button
      spinnerPlacement="start"
      loadingText=" Spinner Placement Start"
      loading
      color="primary"
    >
      Button
    </Button>
    <Button
      spinnerPlacement="start"
      loadingText=" Spinner Placement Start"
      loading
      color="neutral"
    >
      Button
    </Button>
    <Button
      spinnerPlacement="end"
      loadingText="Spinner Placement End"
      loading
      color="info"
    >
      Button
    </Button>
    <Button
      spinnerPlacement="end"
      loadingText="Spinner Placement End"
      loading
      color="success"
    >
      Button
    </Button>
    <Button
      spinnerPlacement="end"
      loadingText="Spinner Placement End"
      loading
      color="warning"
    >
      Button
    </Button>
    <Button
      spinnerPlacement="end"
      loadingText="Spinner Placement End"
      loading
      color="danger"
    >
      Button
    </Button>
  </div>
);
