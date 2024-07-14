import { create } from "zustand";

const useMenu = create((set) => ({
  menueOpen: false,
  setMenueOpen: (menueOpen) => set({ menueOpen }),

}));

export default useMenu;
