import { createContext } from '../hooks';

import { TagProps } from './tag';

export type TagSizeProviderProps = {
  size: TagProps['size'];
  color: TagProps['color'];
  variant: TagProps['variant'];
};

const [TagSizeProvider, useTagSizeContext] =
  createContext<TagSizeProviderProps>({
    name: 'TagSizeContext',
    errorMessage:
      'useTagSizeContext: `context` is undefined. Seems you forgot to wrap component within <Tag />'
  });

export { useTagSizeContext, TagSizeProvider };
