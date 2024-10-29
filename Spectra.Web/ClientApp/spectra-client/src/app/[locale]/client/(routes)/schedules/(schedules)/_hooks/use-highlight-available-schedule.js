'use client';

import { useEffect } from 'react';

export const useHighlightAvailableSchedule = ({
  data,
  currentTab,
}) => {
  useEffect(() => {
    function highlightAvailableSchedule() {
      const highlightedEle =
        document.getElementById('highlighted');

      if (highlightedEle) {
        highlightedEle.classList.remove(
          'after:bg-blueLinerGradient',
          'after:shadow-md'
        );
        highlightedEle.classList.add(
          'after:bg-transparent',
          'group'
        );
      }

      if (currentTab !== 'new') return;
      const button = document.getElementById('available');
      if (!button) return;

      const td = button?.parentElement;
      if (!td) return;

      const tr = td?.parentElement;
      if (!tr) return;

      tr.id = 'highlighted';
      tr.classList.remove('after:bg-transparent', 'group');
      tr.classList.add(
        'after:bg-blueLinerGradient',
        'after:shadow-md'
      );
    }

    highlightAvailableSchedule();
  }, [data, currentTab]);
};
