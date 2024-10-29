'use client';

import { useEffect } from 'react';

export const useHighlightAvailableSchedule = ({
  data,
  currentTab,
}) => {
  useEffect(() => {
    function highlightAvailableSchedule() {
      const tbody = document.querySelector('tbody');
      if (!tbody) return;

      const secondTr = tbody.querySelector(
        'tr:nth-child(2)'
      );
      if (!secondTr) return;

      secondTr.classList.remove('bg-blueLinerGradient');
      secondTr.style.boxShadow = 'none';
      secondTr.classList.add('group');

      if (currentTab !== 'new') return;
      const button = document.getElementById('available');
      if (!button) return;

      const td = button?.parentElement;
      if (!td) return;

      const tr = td?.parentElement;
      if (!tr) return;

      tr.classList.add('bg-blueLinerGradient');
      tr.style.boxShadow =
        '0px 14px 114px -27px rgba(232, 247, 255, 1)';
      tr.classList.remove('group');
    }

    highlightAvailableSchedule();
  }, [data, currentTab]);
};
