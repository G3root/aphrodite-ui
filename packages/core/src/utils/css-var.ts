import { TokenValue } from '../types';

export const cssVar = (value: TokenValue) => `var(--${value})`;
