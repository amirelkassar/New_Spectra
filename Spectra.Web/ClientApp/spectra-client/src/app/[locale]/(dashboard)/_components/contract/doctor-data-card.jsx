'use client';

import Card from '@/components/card';
import Avatar from '@/components/avatar';
import { useImagePath } from '@/hooks/use-image-path';
import { useDate } from '@/hooks/use-date';
import { ContractStatus } from '@/dashboard/_components/contract/contract-status';
import { ChatsButton } from '@/dashboard/_components/contract/ui';

export const DoctorDataCard = ({
  employeeId = '',
  employeeName = '',
  imagePath = '',
  jobTitle = '',
  contractState = '',
  created = '',
  showChatButton = false,
}) => {
  const path = useImagePath(imagePath);

  const { fullYear } = useDate(created);

  return (
    <Card
      data-id={employeeId}
      className='text-xs mdl:text-base flex gap-3 items-center mdl:gap-5 mdl:px-16 border-2 border-grayLight mdl:border-transparent rounded-2xl !p-5'
    >
      <Avatar src={path} name={employeeName} className='size-12' />

      <div className='flex flex-col gap-1 mdl:flex-row mdl:items-center mdl:gap-10 lg:gap-20 flex-1'>
        <h2 className='font-bold capitalize text-xs mdl:text-base'>
          {employeeName}
        </h2>

        <span>{jobTitle}</span>

        <span>{fullYear}</span>

        <ContractStatus state={contractState} />
      </div>

      {showChatButton && <ChatsButton />}
    </Card>
  );
};
