import { Canvas } from '~/components';
import { createElement } from 'react';
import { Center, Spinner, Button, IconButton } from '@aphrodite-ui/react';

const addDocClass = (props: any, tag: any) =>
  createElement(tag, { ...props, className: 'docs' });

export const mdxComponents = {
  h1: (props: any) => addDocClass(props, 'h1'),
  h2: (props: any) => addDocClass(props, 'h2'),
  h3: (props: any) => addDocClass(props, 'h3'),
  h4: (props: any) => addDocClass(props, 'h4'),
  h5: (props: any) => addDocClass(props, 'h5'),
  h6: (props: any) => addDocClass(props, 'h6'),
  p: (props: any) => addDocClass(props, 'p'),
  ol: (props: any) => addDocClass(props, 'ol'),
  ul: (props: any) => addDocClass(props, 'ul'),
  pre: (props: any) => addDocClass(props, 'pre'),
  li: (props: any) => addDocClass(props, 'li'),
  a: (props: any) => addDocClass(props, 'a'),
  code: (props: any) => addDocClass(props, 'code'),
  detail: (props: any) => addDocClass(props, 'detail'),
  blockquote: (props: any) => addDocClass(props, 'blockquote'),
  Canvas,
  Center,
  Spinner,
  Button,
  IconButton
};
