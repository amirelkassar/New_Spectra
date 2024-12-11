import { create } from "zustand";

const useMenu = create((set) => ({
  menuOpen: false,
  setmenuOpen: (menuOpen) => set({ menuOpen }),
}));

export default useMenu;
