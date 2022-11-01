import { blackA, whiteA } from '@radix-ui/colors';
import { ColorTokens, ThemeRange, TokenKey, Tokens } from '../types';

const blackAlphaValues = Object.values(blackA);
const whiteAlphaValues = Object.values(whiteA);

export const genBlackAlphaTheme = (value: ThemeRange): ColorTokens => {
  const themeValue = blackAlphaValues[value - 1];
  const theme: Tokens = 'black-alpha';
  const key: TokenKey = `--${theme}-${value}`;
  return { [key]: themeValue };
};

export const genWhiteAlphaTheme = (value: ThemeRange): ColorTokens => {
  const themeValue = whiteAlphaValues[value - 1];
  const theme: Tokens = 'white-alpha';
  const key: TokenKey = `--${theme}-${value}`;
  return { [key]: themeValue };
};
