import { create } from 'zustand';

export const useClientVideoStore = create((set) => ({
  isFullScreen: true,
  view: '',
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
