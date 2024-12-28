'use client';

import { useCallback } from 'react';
import { useRouter } from '@/i18n/routing';

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
  href = '',
  showChatButton = false,
}) => {
  const router = useRouter();

  const path = useImagePath(imagePath);

  const { fullYear } = useDate(created);

  const handleClick = useCallback(() => {
    if (!href) return;
    router.push(href);
  }, [router, href]);

  return (
    <Card
      data-id={employeeId}
      className='text-xs mdl:text-base flex gap-3 items-center mdl:gap-5 mdl:px-16 border-2 border-grayLight mdl:border-transparent rounded-2xl !p-5'
    >
      <Avatar
        onClick={handleClick}
        src={path}
        name={employeeName}
        className='size-12 cursor-pointer'
      />

      <div className='flex flex-col gap-1 mdl:flex-row mdl:items-center mdl:gap-10 lg:gap-20 flex-1'>
        <h2
          onClick={handleClick}
          className='font-bold capitalize text-xs mdl:text-base cursor-pointer'
        >
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
