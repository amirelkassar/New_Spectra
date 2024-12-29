'use client';

import { BackButton } from '@/components/buttons/back-button';
import Card from '@/components/card';

export const PersonalInfo = () => {
  return (
    <div className='h-full'>
      <Card className='h-full'>
        <BackButton />
      </Card>
    </div>
  );
};
