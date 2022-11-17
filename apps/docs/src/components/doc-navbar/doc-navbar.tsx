import { IconButton } from '@aphrodite-ui/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { MobileDrawer } from './mobile-drawer';
import { useMenuState } from '~/contexts';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;

      default:
        setTheme('light');
        break;
    }
  };
  return (
    <IconButton
      aria-label="toggle-theme"
      variant="outline"
      color="neutral"
      size="sm"
      onClick={handleTheme}
      icon={
        <>
          <FiMoon aria-hidden className="dark:hidden block h-4 w-4" />
          <FiSun aria-hidden className="dark:block hidden h-4 w-4" />
        </>
      }
    />
  );
}

function MenuButton() {
  const { handleOpen } = useMenuState();
  return (
    <IconButton
      variant="ghost"
      color="neutral"
      aria-label="Open navigation"
      size="sm"
      icon={<FiMenu className="h-5 w-5" strokeWidth={2} />}
      onClick={handleOpen}
    />
  );
}

export function DocNavbar() {
  return (
    <>
      <nav className="sticky nav top-0 z-50 flex flex-wrap items-center justify-between dark:bg-neutral-2 bg-white px-4 py-5 motion-safe:transition duration-500  sm:px-6 lg:px-8 ">
        <div className="mr-6 flex lg:hidden">
          <MenuButton />
        </div>
        <div className="relative flex flex-grow basis-0 items-center">
          <Link aria-label="Home page" href="/">
            <span className="font-semibold  text-xl">Aphrodite UI</span>
          </Link>
        </div>

        <div>
          <ThemeSwitcher />
        </div>
      </nav>
      <MobileDrawer />
    </>
  );
}
