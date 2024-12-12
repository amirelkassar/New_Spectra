'use client';

import { ProgressCard as Progress } from '@/components/services';

export const ProgresCard = ({ data }) => {
  return (
    <Progress data={data}>
      <Progress.Progress />
      <Progress.Title />
      <Progress.Ratio />
      <Progress.Done>ماتم انجازه</Progress.Done>
      <Progress.Remaning>المتبقي</Progress.Remaning>
    </Progress>
  );
};
