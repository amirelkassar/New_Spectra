'use client';
import { MedicalTeamData } from '@/lib/demoData';
import { Section } from '../../_components/section';
import { TeamMember } from '../../_components/team-member';
import { PaginationBtns } from './team-pagination';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';

export const Team = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('جميع التخصصات');

  return (
    <Section
      aria-label='Team'
      aria-labelledby='team'
      id='team'
      type='custombtn'
      heading='فريق صحي معتمد متكامل'
      className='space-y-5'
      customBtn={
        <SelectFilter value={value} setValue={setValue} />
      }
    >
      <div className='grid grid-cols-2 mdl:grid-cols-4 gap-5'>
        {handlePagination(
          12,
          page,
          filterTeamMember(value)
        ).map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>

      <PaginationBtns
        data={filterTeamMember(value)}
        noPerPage={12}
        page={page}
        setPage={setPage}
      />
    </Section>
  );
};

function filterTeamMember(profession) {
  if (!profession || profession === 'جميع التخصصات')
    return MedicalTeamData;
  return MedicalTeamData.filter(
    (member) => member.profession === profession
  );
}

export function handlePagination(
  noPerPage = 4,
  page = 1,
  data = []
) {
  const startIndex = (page - 1) * noPerPage;
  const endIndex = page * noPerPage;
  return data.slice(startIndex, endIndex);
}

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
