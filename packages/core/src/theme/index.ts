import {
  violet,
  green,
  yellow,
  red,
  blue,
  gray,
  violetDark,
  yellowDark,
  greenDark,
  blueDark,
  grayDark,
  redDark,
  blackA,
  whiteA
} from '@radix-ui/colors';
import { ColorTokens, Entries } from '../types';
import { cssVar } from '../utils';

const colors = {
  violet,
  green,
  yellow,
  red,
  blue,
  gray,
  violetDark,
  yellowDark,
  greenDark,
  blueDark,
  grayDark,
  redDark,
  blackA,
  whiteA
};

const themeNameMap = {
  violet: 'primary',
  green: 'success',
  yellow: 'warning',
  red: 'danger',
  blue: 'info',
  gray: 'neutral',
  violetDark: 'primary',
  yellowDark: 'warning',
  greenDark: 'success',
  blueDark: 'info',
  grayDark: 'neutral',
  redDark: 'danger',
  whiteA: 'white-alpha',
  blackA: 'black-alpha'
};

function generateThemeTokens() {
  let rootColors: any = {};
  let darkModeColors: any = {};
  for (const [colorName, colorObj] of Object.entries(colors) as Entries<
    typeof colors
  >) {
    const isDark = colorName.includes('Dark');
    const colorMap = isDark ? darkModeColors : rootColors;

    console.log({ colorName });

    for (const [key, value] of Object.entries(colorObj)) {
      const scale = key.match(/\d+/g);
      const color = themeNameMap[colorName];
      colorMap[`--${color}-${scale}`] = value;
    }
  }
  return {
    lightThemeTokens: {
      ...rootColors,
      '--lo-contrast': cssVar('neutral', 1),
      '--hi-contrast': cssVar('neutral', 12),
      '--sld-btn-neu-bg': cssVar('neutral', 12),
      '--sld-btn-neu-hov-bg': '#393e46'
    } as ColorTokens,
    darkThemeTokens: {
      ...darkModeColors,
      '--lo-contrast': '#202028',
      '--sld-btn-neu-bg': cssVar('neutral', 3),
      '--sld-btn-neu-hov-bg': cssVar('neutral', 4)
    } as ColorTokens
  };
}

export function generateThemeColors(colorsArg: ColorTokens) {
  let themeObj: any = {};
  const themeTokens = Object.keys(colorsArg);
  for (const colorName of themeTokens) {
    const key = colorName.replace('--', '');
    themeObj[key] = `var(${colorName})`;
  }
  return themeObj;
}

const { darkThemeTokens, lightThemeTokens } = generateThemeTokens();

export { darkThemeTokens, lightThemeTokens };
