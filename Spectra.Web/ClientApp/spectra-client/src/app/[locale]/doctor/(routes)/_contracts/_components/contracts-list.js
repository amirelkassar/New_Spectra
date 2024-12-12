'use client';
import { Card } from '@mantine/core';
import React from 'react';
import ContractsRow from './contractsRow';

function ContractsList({ data = [] }) {
  return (
    <Card className='flex-1 rounded-lg'>
      <div className='flex flex-col gap-4 lg:pt-4 w-full lg:max-w-[94%] mx-auto'>
        {data?.data.data.map((item, index) => {
          return (
            <ContractsRow
              newContracts={index === 0}
              data={item}
              key={index}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default ContractsList;
