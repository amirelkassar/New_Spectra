import { create } from 'zustand';

export const useSidebar = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
