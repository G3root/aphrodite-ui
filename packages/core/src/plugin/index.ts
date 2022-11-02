// credit: includes some snippets from https://github.com/brattonross/windy-radix-palette/blob/main/packages/palette/index.js

import plugin from 'tailwindcss/plugin';
import {
  darkThemeTokens,
  generateThemeColors,
  lightThemeTokens
} from '../theme';
import { button } from '../components';
import { ColorTokens } from '../types';
interface pluginArgs {
  theme?: {
    light?: ColorTokens;
    dark?: ColorTokens;
  };
}

export const aphroditePlugin = plugin.withOptions(
  (data?: pluginArgs) => {
    const root = { ...lightThemeTokens, ...data?.theme?.light };
    const dark = {
      ...darkThemeTokens,
      ...data?.theme?.dark
    };
    return ({ addBase, addComponents }) => {
      addBase({
        ':root': root,
        '[data-theme="dark"]': dark
      });
      addComponents({
        ...button
      });
    };
  },

  () => {
    const themeColors = generateThemeColors(lightThemeTokens);
    console.log({ themeColors, lightThemeTokens });

    return {
      theme: {
        extend: {
          colors: themeColors
        }
      }
    };
  }
);
