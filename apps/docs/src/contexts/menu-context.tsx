import { signal } from '@preact/signals-react';
import { createContext, ReactNode, useContext } from 'react';

function createMenuState() {
  const isOpen = signal(false);

  const handleOpen = () => {
    isOpen.value = !isOpen.value;
  };

  return { handleOpen, isOpen };
}

type MenuStateValues = ReturnType<typeof createMenuState>;

const MenuState = createContext<MenuStateValues>({} as MenuStateValues);

export const useMenuState = () => useContext(MenuState);

interface MenuContextProviderProps {
  children: ReactNode;
}

export function MenuContextProvider(props: MenuContextProviderProps) {
  const { children } = props;
  return (
    <MenuState.Provider value={createMenuState()}>
      {children}
    </MenuState.Provider>
  );
}
