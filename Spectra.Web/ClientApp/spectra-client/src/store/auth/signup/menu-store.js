import { create } from "zustand";

const useMenu = create((set) => ({
  menueOpen: false,
  modalOneOpen: false,
  setMenueOpen: (menueOpen) => set({ menueOpen }),
  setModalOneOpen: (modalOneOpen) => set({ modalOneOpen }),

}));

export default useMenu;
