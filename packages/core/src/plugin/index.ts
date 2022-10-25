import plugin from 'tailwindcss/plugin';
import { darkTheme, lightTheme } from '../theme';

export const aphroditePlugin = plugin(({ addBase }) => {
  addBase({
    ':root': lightTheme,
    '[data-theme="dark"]': darkTheme
  });
});
