import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import clsx from 'clsx';

export default function Modal({
  isOpen = false,
  setIsOpen,
  children,
  containerClassName,
}) {
  function close() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen}>
      <Dialog
        as='div'
        className='relative z-30 focus:outline-none'
        onClose={close}
      >
        <TransitionChild
          as={'div'}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          {' '}
          <div className='fixed bg-black/25 inset-0 z-30 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4'>
              <TransitionChild
                enter='ease-out duration-300'
                enterFrom='opacity-0 transform-[scale(95%)]'
                enterTo='opacity-100 transform-[scale(100%)]'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 transform-[scale(100%)]'
                leaveTo='opacity-0 transform-[scale(95%)]'
              >
                <DialogPanel className={clsx(containerClassName)}>
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
