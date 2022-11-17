import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FiX } from 'react-icons/fi';
import { useMenuState } from '~/contexts';
import { IconButton } from '@aphrodite-ui/react';
import { SidebarList } from '../side-bar';

export function MobileDrawer() {
  const { isOpen, handleOpen } = useMenuState();
  return (
    <Transition.Root show={isOpen.value} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[60] lg:hidden"
        onClose={handleOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black-alpha-10" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto dark:bg-neutral-2 bg-white pb-12 shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <IconButton
                  variant="ghost"
                  color="neutral"
                  aria-label="Close menu"
                  size="sm"
                  icon={<FiX className="h-5 w-5" strokeWidth={2} />}
                  onClick={handleOpen}
                />
              </div>

              <div className="pl-8 pr-4">
                <SidebarList />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
