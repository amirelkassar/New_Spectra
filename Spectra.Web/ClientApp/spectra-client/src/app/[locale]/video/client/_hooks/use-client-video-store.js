import { create } from 'zustand';

export const useClientVideoStore = create((set) => ({
  isFullScreen: true,
  view: '',
  mic: true,
  camera: true,
  toggleMic: () => set((state) => ({ mic: !state.mic })),
  toggleCamera: () =>
    set((state) => ({ camera: !state.camera })),
  toggleFullScreen: () =>
    set((state) => ({
      isFullScreen: !state.isFullScreen,
      view: '',
    })),
  toggleView: (v) =>
    set((state) => {
      if (v === state.view) {
        return { view: '' };
      } else {
        return {
          view: v,
          isFullScreen:
            v === 'chat' ? false : state.isFullScreen,
        };
      }
    }),
}));
