'use client';

import { create } from 'zustand';

export const useChildStore = create((set) => ({
  childId: '',
  setChildId: (childId) => {
    set({ childId });
    if (typeof window !== 'undefined') {
      localStorage.setItem('childId', childId);
    }
  },
  getChildIdFromLocalStorage: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('childId') || null;
    }
    return null;
  },
}));
