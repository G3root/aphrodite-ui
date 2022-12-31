import {
  TagCloseButton,
  TagIconLeft,
  TagIconRight,
  TagLabel,
  Tag
} from '@aphrodite-ui/react';
import { Meta } from '@storybook/react';
import Icon from './MockIcon';

const meta: Meta<typeof Tag> = {
  title: 'Components/Data Display/Tag',
  component: Tag,
  args: {
    children: 'Tag'
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    shape: {
      control: { type: 'select' },
      options: ['rounded', 'square']
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'subtle', 'outline']
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'neutral', 'success', 'info', 'warning', 'danger']
    }
  }
};

export default meta;

export const Template = {};

export const Variants = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-2 flex-wrap">
      <Tag variant="solid" color="primary">
        Tag
      </Tag>
      <Tag variant="solid" color="neutral">
        Tag
      </Tag>
      <Tag variant="solid" color="info">
        Tag
      </Tag>
      <Tag variant="solid" color="success">
        Tag
      </Tag>
      <Tag variant="solid" color="warning">
        Tag
      </Tag>
      <Tag variant="solid" color="danger">
        Tag
      </Tag>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <Tag variant="subtle" color="primary">
        Tag
      </Tag>
      <Tag variant="subtle" color="neutral">
        Tag
      </Tag>
      <Tag variant="subtle" color="info">
        Tag
      </Tag>
      <Tag variant="subtle" color="success">
        Tag
      </Tag>
      <Tag variant="subtle" color="warning">
        Tag
      </Tag>
      <Tag variant="subtle" color="danger">
        Tag
      </Tag>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <Tag variant="outline" color="primary">
        Tag
      </Tag>
      <Tag variant="outline" color="neutral">
        Tag
      </Tag>
      <Tag variant="outline" color="info">
        Tag
      </Tag>
      <Tag variant="outline" color="success">
        Tag
      </Tag>
      <Tag variant="outline" color="warning">
        Tag
      </Tag>
      <Tag variant="outline" color="danger">
        Tag
      </Tag>
    </div>
  </div>
);

/**
 * The tag component can contain an Icon. This is done by using the `TagIcon` component.
 * Positioning the tag icon can be done by placing it before (left side)
 * or after (right side) the tag component
 */

export const withLeftIcon = () => (
  <div className="flex items-center gap-2">
    <Tag color="primary">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="neutral">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="info">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="success">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="warning">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="danger">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
  </div>
);

export const withRightIcon = () => (
  <div className="flex items-center gap-2">
    <Tag color="primary">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="neutral">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="info">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="success">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="warning">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="danger">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
  </div>
);

export const withCloseButton = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Tag variant="subtle" color="primary" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="neutral" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="info" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="success" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="warning" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="danger" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
    </div>
    <div className="flex items-center gap-2 mb-2">
      <Tag variant="outline" color="primary" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="neutral" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="info" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="success" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="warning" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="danger" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
    </div>
    <div className="flex items-center gap-2 mb-2">
      <Tag variant="solid" color="primary" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="neutral" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="info" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="success" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="warning" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="danger" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
    </div>
  </div>
);
