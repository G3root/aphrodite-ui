import { violet, green, yellow, red, blue, gray } from '@radix-ui/colors';
import { themeRange } from '../constants';
import { TokenKey, ColorTokens, Tokens, ThemeRange } from '../types';
import { genBlackAlphaTheme, genWhiteAlphaTheme } from './common-theme';

const primaryValues = Object.values(violet);
const neutralValues = Object.values(gray);
const successValues = Object.values(green);
const infoValues = Object.values(blue);
const warningValues = Object.values(yellow);
const dangerValues = Object.values(red);

const genPrimaryTheme = (value: ThemeRange): ColorTokens => {
  const themeValue = primaryValues[value - 1];
  const theme: Tokens = 'primary';
  const key: TokenKey = `--${theme}-${value}`;
  return { [key]: themeValue };
};

const genNeutralTheme = (value: ThemeRange): ColorTokens => {
  const themeValue = neutralValues[value - 1];
  const theme: Tokens = 'neutral';
  const key: TokenKey = `--${theme}-${value}`;
  return { [key]: themeValue };
};

const genSuccessTheme = (value: ThemeRange): ColorTokens => {
  const themeValue = successValues[value - 1];
  const theme: Tokens = 'success';
  const key: TokenKey = `--${theme}-${value}`;
  return { [key]: themeValue };
};

const genInfoTheme = (value: ThemeRange): ColorTokens => {
  const themeValue = infoValues[value - 1];
  const theme: Tokens = 'info';
  const key: TokenKey = `--${theme}-${value}`;
  return { [key]: themeValue };
};

const genWarningTheme = (value: ThemeRange): ColorTokens => {
  const themeValue = warningValues[value - 1];
  const theme: Tokens = 'warning';
  const key: TokenKey = `--${theme}-${value}`;
  return { [key]: themeValue };
};

const genDangerTheme = (value: ThemeRange): ColorTokens => {
  const themeValue = dangerValues[value - 1];
  const theme: Tokens = 'danger';
  const key: TokenKey = `--${theme}-${value}`;
  return { [key]: themeValue };
};

export const lightTheme = themeRange.reduce<ColorTokens>((prev, curr) => {
  const tokens = {
    ...prev,
    ...genBlackAlphaTheme(curr),
    ...genWhiteAlphaTheme(curr),
    ...genPrimaryTheme(curr),
    ...genNeutralTheme(curr),
    ...genSuccessTheme(curr),
    ...genInfoTheme(curr),
    ...genWarningTheme(curr),
    ...genDangerTheme(curr)
  };
  return tokens;
}, {});
