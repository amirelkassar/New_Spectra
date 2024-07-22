import { create } from "zustand";

const useMenu = create((set) => ({
  menuOpen: false,
  modalOneOpen: false,
  setmenuOpen: (menuOpen) => set({ menuOpen }),
  setModalOneOpen: (modalOneOpen) => set({ modalOneOpen }),

}));

export default useMenu;
