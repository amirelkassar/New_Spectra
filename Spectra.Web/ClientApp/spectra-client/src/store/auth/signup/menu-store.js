import { create } from "zustand";

const useMenu = create((set) => ({
  modal: {
    open: false,
    id: 1,
    type: "date",
  },
  editModal: (key, value) =>
    set((state) => ({
      modal: {
        ...state.modal,
        [key]: value,
      },
    })),
  menuOpen: false,
  modalOneOpen: false,
  setmenuOpen: (menuOpen) => set({ menuOpen }),
  setModalOneOpen: (modalOneOpen) => set({ modalOneOpen }),
}));

export default useMenu;
