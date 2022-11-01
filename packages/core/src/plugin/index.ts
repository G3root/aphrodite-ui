import plugin from 'tailwindcss/plugin';
import { darkTheme, lightTheme } from '../theme';
import { button } from '../components';
import { cssVar } from '../utils';
import { ColorTokens } from '../types';
interface pluginArgs {
  theme?: {
    light?: ColorTokens;
    dark?: ColorTokens;
  };
}

export const aphroditePlugin = (data: pluginArgs) =>
  plugin(({ addBase, addComponents }) => {
    addBase({
      ':root': {
        ...lightTheme,
        '--lo-contrast': cssVar('neutral', 1),
        '--hi-contrast': cssVar('neutral', 12),
        '--sld-btn-neu-bg': cssVar('neutral', 12),
        '--sld-btn-neu-hov-bg': '#393e46',
        ...data.theme?.light
      },
      '[data-theme="dark"]': {
        ...darkTheme,
        '--lo-contrast': '#202028',
        '--sld-btn-neu-bg': cssVar('neutral', 3),
        '--sld-btn-neu-hov-bg': cssVar('neutral', 4),
        ...data.theme?.dark
      }
    });
    addComponents({
      ...button
    });
  });
