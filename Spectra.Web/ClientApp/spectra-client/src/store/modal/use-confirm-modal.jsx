import { create } from 'zustand';
import DeleteModalIcon from '@/assets/icons/deleteModal';

export const useConfirmModal = create((set) => ({
  isOpen: false,
  isPending: false,
  message: 'هل انت متأكد من مسح هذا العنصر؟',
  icon: <DeleteModalIcon className='lg:size-40 size-32' />,
  onConfirm: async () => {},

  open: ({ message, icon, onConfirm, isPending }) =>
    set({
      isOpen: true,
      isPending: isPending || false,
      message: message || 'هل انت متأكد من مسح هذا العنصر؟',
      icon: icon || (
        <DeleteModalIcon className='lg:size-40 size-32' />
      ),
      onConfirm: onConfirm || (async () => {}),
    }),
  close: () => set({ isOpen: false }),
}));
