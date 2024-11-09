'use client';
import { useMemo, useState } from 'react';

import { Select } from '@mantine/core';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';
import { Pagination } from '@/components/pagination';
import {
  Container,
  SectionHeading,
  TeamMember,
} from '@/guest/_components/ui';
import { handlePagination } from '@/lib/utils';

export const Team = ({
  data = [],
  title = 'فريق صحي معتمد متكامل',
}) => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('جميع التخصصات');

  const filterTeamMember = useMemo(() => {
    if (value === 'جميع التخصصات') return data;
    return data.filter((item) => item.profession === value);
  }, [value, data]);

  if (!data.length) return null;
  return (
    <Container
      aria-label='Team'
      aria-labelledby='team'
      id='team'
    >
      <div className='flex justify-between items-center mdl:mb-10'>
        <SectionHeading>{title}</SectionHeading>

        <SelectFilter value={value} setValue={setValue} />
      </div>
      <div className='grid grid-cols-2 mdl:grid-cols-4 gap-5 mb-10'>
        {handlePagination(12, page, filterTeamMember).map(
          (member) => (
            <TeamMember key={member.id} {...member} />
          )
        )}
      </div>

      <Pagination
        data={filterTeamMember}
        noPerPage={12}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
};

const filterData = [
  'جميع التخصصات',
  'اخصائى نفسي',
  'توحد',
  'فرط حركة',
  'ثنائي القطب',
];

const SelectFilter = ({
  value = 'جميع التخصصات',
  setValue = () => {},
}) => {
  return (
    <div>
      <Select
        classNames={{
          input:
            'focus:border-greenMain border-grayMedium placeholder:text-black placeholder:text-xs disabled:border-black/10 disabled:text-black/50 disabled:placeholder:text-black/50 rounded-lg font-bold text-sm mdl:text-medium !p-5 mdl:!p-7 w-48 mdl:w-full',
        }}
        checkIconPosition='right'
        data={filterData}
        disabled={filterData?.length === 0}
        allowDeselect={false}
        value={value}
        onChange={(value) => setValue(value)}
        rightSection={
          <ArrowDownBlack
            className={
              filterData?.length === 0 ? 'opacity-10' : ''
            }
          />
        }
      />
    </div>
  );
};
