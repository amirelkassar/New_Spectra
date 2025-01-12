'use client';

import { useCallback, useMemo, useState } from 'react';

export const useAddWorkSchedule = () => {
  const [workSchedule, setWorkSchedule] = useState({});

  const isDisabled = useMemo(
    () => Object.keys(workSchedule).length === 0,
    [workSchedule]
  );

  const onSave = useCallback(() => {
    console.log(workSchedule);
  }, [workSchedule]);

  return { workSchedule, setWorkSchedule, isDisabled, onSave };
};
