'use client';

import { useCallback } from 'react';
import { useRouter } from '@/i18n/routing';

import Card from '@/components/card';
import Avatar from '@/components/avatar';
import { useImagePath } from '@/hooks/use-image-path';
import { useDate } from '@/hooks/use-date';
import { ContractStatus } from '@/dashboard/_components/contract/contract-status';
import { ChatsButton } from '@/dashboard/_components/contract/ui';
import { useTranslations } from 'next-intl';
import { CONTRACT_STATE } from '@/data';

export const DoctorDataCard = ({
  employeeId = '',
  employeeName = '',
  imagePath = '',
  jobTitle = '',
  contractState = '',
  created = '',
  href = '',
  showChatButton = false,
  canceldByUsername = '',
  cancelingDate = '',
}) => {
  const router = useRouter();

  const tg = useTranslations('general_obj');

  const path = useImagePath(imagePath);

  const { fullYear: contractDate } = useDate(created);

  const { fullYear: cancelDate } = useDate(cancelingDate);

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

        <span>{contractDate}</span>

        <div className='flex items-center gap-3 flex-wrap'>
          <ContractStatus state={contractState} />
          {contractState === CONTRACT_STATE.canceled && (
            <>
              <span className='text-xs mdl:text-base text-grayDark capitalize'>
                {tg('from')} {tg('doc_prefix')} {canceldByUsername}{' '}
                <span
                  className='inline-block ltr:ml-4 rtl:mr-4'
                  dir='ltr'
                >
                  {cancelDate}
                </span>
              </span>
            </>
          )}
        </div>
      </div>

      {showChatButton && <ChatsButton />}
    </Card>
  );
};
