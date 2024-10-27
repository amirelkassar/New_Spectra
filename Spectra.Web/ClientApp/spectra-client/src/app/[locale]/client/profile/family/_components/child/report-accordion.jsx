'use client';

import { Accordion } from '@/components/accordion';

export const ReportAccordion = ({ reports = [] }) => {
  if (!reports?.length) return null;
  return (
    <div dir='ltr'>
      <Accordion>
        {reports?.map((data, index) => (
          <Accordion.Item key={index} value={data.label}>
            <Accordion.Label>{data.label}</Accordion.Label>
            <Accordion.Content>
              <ul>
                {data?.content?.map((item) => (
                  <li
                    className='text-xs mdl:text-base py-4 border-b border-grayLight'
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
