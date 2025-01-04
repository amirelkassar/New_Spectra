import { create } from 'zustand';
import DeleteModalIcon from '@/assets/icons/deleteModal';
import { Translate } from '@/components/translate';

export const useConfirmModalStore = create((set) => ({
  isOpen: false,
  isPending: false,
  message: <Translate value='delete_confirmation' />,
  icon: <DeleteModalIcon className='lg:size-40 size-32' />,
  onConfirm: async () => {},

  open: ({ message, icon, onConfirm, isPending }) =>
    set({
      isOpen: true,
      isPending: isPending || false,
      message: message || <Translate value='delete_confirmation' />,
      icon: icon || (
        <DeleteModalIcon className='lg:size-40 size-32' />
      ),
      onConfirm: onConfirm || (async () => {}),
    }),
  close: () => set({ isOpen: false }),
}));
