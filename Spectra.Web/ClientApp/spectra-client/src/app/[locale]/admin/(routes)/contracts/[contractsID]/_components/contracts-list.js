'use client';
import { Card } from '@mantine/core';
import React from 'react';
import ContractsIcon from '@/assets/icons/contracts';
import ArrowLeft from '@/assets/icons/arrow-left';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';
import { GetContractsIDInAdmin } from '@/hooks/queries/admin/contracts-admin-api';
import { getDate } from '@/lib/utils';
import HandelShowData from '@/components/handelShowData';

function ContractsList({ idUser }) {
  const { data, isLoading } = GetContractsIDInAdmin(idUser);
  console.log(data);
  return (
    <Card className='flex-1 rounded-lg'>
      <div className='flex flex-col gap-4 lg:pt-4 w-full lg:max-w-[94%] mx-auto'>
        <HandelShowData
          isLoading={isLoading}
          lengthData={data?.data?.data?.length}
        >
          {data?.data?.data?.map((item, index) => {
            return (
              <div
                key={index}
                className='bg-[#F1FCFF] relative pe-6 lg:pe-9 flex items-center gap-4 justify-between rounded-xl px-3 py-5'
              >
                {/* <div className=" absolute top-4 end-3">
                  <ActionMenu id={item.id} idUser={idUser} />
                </div> */}
                <div className='flex items-center gap-5 lg:gap-8'>
                  <div className='bg-white py-2 lg:py-4 px-2 lg:px-5 w-10 h-9 lg:w-[64px] lg:h-[61px] rounded-xl flex items-center justify-center'>
                    <ContractsIcon
                      fill={'#10B0C1'}
                      className={'w-auto h-full'}
                    />
                  </div>
                  <div className='lg:min-w-[172px] flex flex-col gap-2 lg:gap-4'>
                    <h3 className='text-sm lg:text-xl font-Bold'>
                      {index === 0 ? 'النسخة محدثة' : 'النسخة سابقة'}
                    </h3>
                    <div className='flex items-center gap-1'>
                      <ArrowLeft
                        fill='#10B0C1'
                        className={` w-3 lg:w-auto   ${
                          item.adminOrEmployee === 1
                            ? '-rotate-45'
                            : '-rotate-[225deg]'
                        }  `}
                      />
                      <p className='text-[12px] lg:text-[16px] '>
                        {item.adminOrEmployee === 1 ? 'من' : 'الى'}{' '}
                        المشرف
                      </p>
                    </div>
                  </div>
                  <div className=' flex flex-col gap-2 lg:gap-4'>
                    <p className=' text-sm lg:font-Regular'>
                      {getDate(item.date).fullYear}
                    </p>
                    <p className=' text-sm lg:font-Regular'>
                      {getDate(item.date).time}
                    </p>
                  </div>
                </div>
                <Link
                  href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERDETAILS(
                    idUser,
                    item.contractId
                  )}
                  className='bg-greenMain rounded-xl h-12 w-[104px] lg:w-[168px] flex items-center justify-center text-sm lg:text-xl font-Bold text-white duration-300 hover:shadow-md'
                >
                  عرض
                </Link>
              </div>
            );
          })}
        </HandelShowData>
      </div>
    </Card>
  );
}

export default ContractsList;
