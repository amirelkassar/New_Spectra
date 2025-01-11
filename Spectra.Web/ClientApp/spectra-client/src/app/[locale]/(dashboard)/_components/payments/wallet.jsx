'use client';

import { useTranslations } from 'next-intl';

import { GradientCard } from '@/components/gradient-card';

import DollarCircle from '@/assets/icons/dollar-circle';
import UpDown from '@/assets/icons/up-down';
import Button from '@/components/button';

export const Wallet = ({
  data = {
    balance: 1000,
    deposits: 1500,
    transfers: 50,
    used: 3500,
  },
  currancy = 'SAR',
  onAddBalance = () => {},
}) => {
  const t = useTranslations('payments_obj');

  return (
    <GradientCard className='space-y-7'>
      <div className='flex items-center flex-col mdl:flex-row mdl:flex-nowrap mdl:justify-between gap-5'>
        <div className='flex items-center gap-3 shrink-0'>
          <DollarCircle />
          <p className='text-sm mdl:text-xl'>
            {t('current_balance')}
          </p>
          <span className='text-2xl mdl:text-3xl font-bold !ms-10'>
            {currancy} {data.balance.toLocaleString()}
          </span>
        </div>

        <div className='w-full max-w-80 shrink'>
          <Button
            type='button'
            onClick={onAddBalance}
            variant='secondary'
            className='font-bold text-sm mdl:text-xl py-2 w-full'
          >
            {t('wallet_deposit')}
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-5'>
        <StatusCard
          label={t('used')}
          value={data.used.toLocaleString()}
          currancy={currancy}
        />
        <StatusCard
          label={t('deposits')}
          value={data.deposits.toLocaleString()}
          currancy={currancy}
        />
        <StatusCard
          label={t('transactions_count')}
          value={data.transfers}
        />
      </div>
    </GradientCard>
  );
};

const StatusCard = ({ label = '', value = '', currancy = '' }) => {
  return (
    <div
      style={{
        boxShadow: '7px 8px 12.6px -2px #10B0C11A',
      }}
      className='bg-blueLight rounded-2xl p-5 grid grid-rows-3  gap-1 mdl:gap-4 place-items-center'
    >
      <UpDown className='size-6 mdl:size-7' />
      <p className='text-xs mdl:text-base text-center'>{label}</p>
      <span dir='ltr' className='text-sm mdl:text-xl font-bold'>
        {value} {currancy}
      </span>
    </div>
  );
};
