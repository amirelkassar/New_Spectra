import { create } from "zustand";

const useModal = create((set) => ({
  modal: {
    open: false,
    id: 1,
    type: "",
    countSelect:1
  },
  editModal: (key, value) =>
    set((state) => ({
      modal: {
        ...state.modal,
        [key]: value,
      },
    })),
}));

export default useModal;

