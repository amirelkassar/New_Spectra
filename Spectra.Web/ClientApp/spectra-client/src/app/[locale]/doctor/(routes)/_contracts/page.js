'use client';
import React from 'react';
import BtnSendReq from './_components/btnSendReq';
import ContractsList from './_components/contracts-list';
import DraftContracts from './_components/draftContracts';
import { GetContracts } from '@/hooks/queries/doctor/contracts-api';
import HandelShowData from '@/components/handelShowData';
function page() {
  const { data, isLoading } = GetContracts(
    '01JC8C207X83TANTKBYHY2W67F'
  );
  return (
    <div className='h-full flex-1'>
      <div className='flex  justify-center -mt-2 pt-10 gap-5 bg-white '>
        <BtnSendReq />
      </div>
      <div className='mt-5'>
        <HandelShowData
          isLoading={isLoading}
          lengthData={data?.data?.data?.length}
        >
          {data?.data?.data.find(
            (item) => item.contractCase === 1
          ) ? (
            <DraftContracts
              data={data?.data.data}
              isLoading={isLoading}
            />
          ) : (
            <ContractsList data={data} isLoading={isLoading} />
          )}
        </HandelShowData>
      </div>
    </div>
  );
}

export default page;
