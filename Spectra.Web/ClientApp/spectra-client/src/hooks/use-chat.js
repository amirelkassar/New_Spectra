import { create } from 'zustand';

export const useChat = create((set, get) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => {
    if (!get().isOpen) {
      set({ isOpen: true });
    }
  },
  close: () => {
    if (get().isOpen) {
      set({ isOpen: false });
    }
  },
}));
