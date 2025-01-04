'use client';

import { useMemo } from 'react';
import { Service } from './ui';
import { useTranslations } from 'next-intl';

export const ServiceInfo = ({
  id = '',
  name = '',
  price = 0,
  terms = '',
  employeePercentage = 0,
  deletable = false,
  onDelete = () => {},
}) => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  const netEarnings = useMemo(() => {
    if (!price && !employeePercentage) return '0';
    if (!employeePercentage) return price.toLocaleString();
    if (isNaN(+employeePercentage) || isNaN(+price)) return '--';

    const net = price * (employeePercentage / 100);
    return Math.round(net, 2).toLocaleString();
  }, [price, employeePercentage]);

  return (
    <Service data-id={id} className='flex gap-3'>
      {deletable && (
        <div>
          <Service.Delete
            onClick={(e) => {
              e.preventDefault();
              onDelete();
            }}
          />
        </div>
      )}
      <div className='space-y-2 flex-1'>
        <div className='flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-start'>
          <div className='flex items-start justify-between lg:justify-start gap-3'>
            <h4 className='text-xs mdl:text-base capitalize'>
              {name}
            </h4>

            <Service.Price>{price?.toLocaleString()}</Service.Price>
          </div>

          <div className='flex items-center justify-between lg:block space-y-2 gap-3'>
            <span className='text-grayDark text-xs mdl:text-base lg:text-center block capitalize'>
              {t('net_earnings')}
            </span>
            <Service.NetEarnings currancy='SAR'>
              {netEarnings?.toLocaleString()}
            </Service.NetEarnings>
          </div>
        </div>

        {terms && (
          <Service.Terms headline={tg('terms_and_conditions')}>
            {terms}
          </Service.Terms>
        )}
      </div>
    </Service>
  );
};
