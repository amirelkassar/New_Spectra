import ArrowLeft from '@/assets/icons/arrow-left';
import ContractsIcon from '@/assets/icons/contracts';
import ContractsTrueIcon from '@/assets/icons/contractsTrue';
import SuccessIcon from '@/assets/icons/sucsess';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';
import React from 'react';
import { getDate } from '@/lib/utils';
import ActionMenu from './ActionMenuContractsRow';

function ContractsRow({ data, newContracts = false }) {
  return (
    <div
      className={`${
        data.done ? 'bg-[#D0F0FB]' : 'bg-[#F1FCFF]'
      } relative pe-6 lg:pe-9 flex items-center gap-4 justify-between rounded-xl px-3 py-5`}
    >
      <div className=' absolute top-4 end-3'>
        <ActionMenu
          id={data.contractId}
          employeeId={data.employeeId}
        />
      </div>
      <div className='flex items-center gap-5 lg:gap-8'>
        <div className='bg-white py-2 lg:py-4 px-2 lg:px-5 w-10 h-9 lg:w-[64px] lg:h-[61px] rounded-xl flex items-center justify-center'>
          {data.done ? (
            <ContractsTrueIcon
              fill={'#10B0C1'}
              className={'w-auto h-full'}
            />
          ) : (
            <ContractsIcon
              fill={'#10B0C1'}
              className={'w-auto h-full'}
            />
          )}
        </div>
        <div className='lg:min-w-[172px] flex flex-col gap-2 lg:gap-4'>
          <div className='flex items-center gap-2'>
            <h3 className='text-sm lg:text-xl font-Bold'>
              {newContracts ? 'النسخة محدثة' : 'النسخة سابقة'}
            </h3>
            {data.contractCase === 6 && (
              <SuccessIcon className={'w-4 lg:w-6 h-auto'} />
            )}
          </div>
          <div className='flex items-center gap-1'>
            <ArrowLeft
              fill='#10B0C1'
              className={` w-3 lg:w-auto   ${
                data.adminOrEmployee === 1
                  ? '-rotate-45'
                  : '-rotate-[225deg]'
              }  `}
            />
            <p className='text-[12px] lg:text-[16px] '>
              المرسل : {data.adminOrEmployee === 1 ? 'المشرف' : 'انا'}
            </p>
          </div>
        </div>
        <div className=' flex flex-col gap-2 lg:gap-4'>
          <p className=' text-sm lg:font-Regular'>
            {getDate(data.date).fullYear}
          </p>
          <p className=' text-sm lg:font-Regular'>
            {getDate(data.date).time}
          </p>
        </div>
      </div>
      <Link
        href={ROUTES.DOCTOR.CONTRACTS.CONTRACTSID(data.contractId)}
        className='bg-greenMain rounded-xl h-12 w-[104px] lg:w-[168px] flex items-center justify-center text-sm lg:text-xl font-Bold text-white duration-300 hover:shadow-md'
      >
        عرض
      </Link>
    </div>
  );
}

export default ContractsRow;
