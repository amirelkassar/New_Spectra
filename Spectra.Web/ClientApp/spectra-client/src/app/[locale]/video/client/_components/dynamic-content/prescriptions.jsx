'use client';

import Image from 'next/image';

import { Accordion } from '@/components/accordion';
import { prescriptionsData } from '@/lib/demoData';
import { PrescriptionInfo } from '@/client/_components/child';

export const Prescriptions = () => {
  return (
    <div className='space-y-5 max-h-full'>
      <h3 className='font-bold text-sm lgl:text-xl border-b border-grayLight pb-3'>
        الوصفات الطبية
      </h3>
      <PrescriptionsAccordion
        prescriptions={prescriptionsData}
      />
    </div>
  );
};

const PrescriptionsAccordion = ({
  prescriptions = [],
  showDescription = false,
}) => {
  if (!prescriptions?.length) return null;
  return (
    <Accordion>
      {prescriptions?.map((prescription, index) => (
        <Accordion.Item
          value={prescription?.drugName}
          key={index}
        >
          <Accordion.Label>
            <div className='flex items-center gap-5'>
              <Image
                src={prescription?.image}
                alt={prescription?.drugName}
                width={50}
                height={50}
                className='mdl:w-12 w-9 h-auto object-contain object-center max-w-full max-h-full'
              />
              <div>
                <span className='block'>
                  {prescription?.drugName}
                </span>
                {showDescription && (
                  <span className='text-xs mdl:text-base font-normal'>
                    {prescription?.description}
                  </span>
                )}
              </div>
            </div>
          </Accordion.Label>
          <Accordion.Content>
            <PrescriptionInfo
              data={prescription}
              className='block sml:block'
            />
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
