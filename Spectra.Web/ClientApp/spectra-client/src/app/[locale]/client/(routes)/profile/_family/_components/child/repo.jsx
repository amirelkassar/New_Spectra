'use client';

import Card from '@/components/card';

export const Repo = ({ date = '', tests = [] }) => {
  if (!tests.length) return null;
  return (
    <Card>
      <h5 className='text-sm mdl:text-xl text-greenMain font-normal'>
        {date}
      </h5>

      <ul>
        {tests.map((test) => (
          <li
            key={test}
            className='text-xs mdl:text-base font-bold ps-6 relative before:absolute before:start-0 before:top-1/2 before:-translate-y-1/2 before:size-2 before:bg-greenMain before:rounded-full after:absolute
            after:start-1 after:top-0 after:h-full after:w-[1px] after:bg-greenMain after:shrink-0 after:ltr:-translate-x-1/2 after:translate-x-1/2 after:last:h-1/2 group'
          >
            <span className='py-2 mdl:py-4 block mdl:border-b-2  mdl:border-b-grayLight mdl:group-last:border-b-0'>
              {test}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
