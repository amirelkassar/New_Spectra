'use client';

import { createContext, useState } from 'react';

export const WorkScheduleContext = createContext({});

export const WorkScheduleProvider = ({ children }) => {
  const [workSchedule, setWorkSchedule] = useState({
    action: 'add', // 'add' | 'edit'
    id: '',
    day: '',
    from: '',
    to: '',
  });

  return (
    <WorkScheduleContext.Provider
      value={{ workSchedule, setWorkSchedule }}
    >
      {children}
    </WorkScheduleContext.Provider>
  );
};
