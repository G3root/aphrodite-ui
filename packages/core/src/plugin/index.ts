import plugin from 'tailwindcss/plugin';
import { darkTheme, lightTheme } from '../theme';
import { button } from '../components';

export const aphroditePlugin = plugin(({ addBase, addComponents }) => {
  addBase({
    ':root': lightTheme,
    '[data-theme="dark"]': darkTheme
  });
  addComponents({
    ...button
  });
});
