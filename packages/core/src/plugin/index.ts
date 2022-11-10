// credit: includes some snippets from https://github.com/brattonross/windy-radix-palette/blob/main/packages/palette/index.js

import plugin from 'tailwindcss/plugin';
import {
  darkThemeTokens,
  generateThemeColors,
  lightThemeTokens
} from '../theme';

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
    return ({ addBase, addVariant }) => {
      addBase({
        ':root': root,
        '[data-theme="dark"]': dark
      });

      addVariant('not-disabled', '&:not(:disabled)');
    };
  },

  () => {
    const themeColors = generateThemeColors(lightThemeTokens);

    return {
      theme: {
        extend: {
          colors: themeColors
        }
      }
    };
  }
);
