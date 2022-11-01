import { ThemeRange, Tokens } from '../types';

export const cssVar = (token: Tokens, range: ThemeRange) => {
  return `var(--${token}-${range})`;
};
