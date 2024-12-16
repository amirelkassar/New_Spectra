'use client';

import { useMemo, useState } from 'react';
import { Select } from '@mantine/core';
import { useLocale } from 'next-intl';

import {
  Container,
  SectionHeading,
  TeamMember,
} from '@/guest/_components/ui';
import { Pagination } from '@/components/table/pagination';
import { QueryWrapper } from '@/components/query-wrapper';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { usePublicMedicalProviders } from '@/hooks/queries/public/medical-provider';
import { usePublicSpecialization } from '@/hooks/queries/public/specialization';

export const Team = ({ title = 'فريق صحي معتمد متكامل' }) => {
  const [mainSpecializationId, setMainSpecializationId] =
    useState('');

  const { pageNum } = useQueryParams();

  const query = usePublicMedicalProviders({
    mainSpecializationId,
    pageNum,
  });

  return (
    <Container aria-label='Team' aria-labelledby='team' id='team'>
      <div className='flex justify-between items-center mdl:mb-10'>
        <SectionHeading>{title}</SectionHeading>

        <SelectFilter
          value={mainSpecializationId}
          setValue={setMainSpecializationId}
        />
      </div>

      <QueryWrapper query={query} isFiltered={!!mainSpecializationId}>
        {({ data, isPlaceholderData, pageSize, totalCount }) => (
          <>
            <div className='grid grid-cols-2 mdl:grid-cols-4 gap-5 mb-10'>
              {data.map((member) => (
                <TeamMember key={member?.id} {...member} />
              ))}
            </div>

            <Pagination
              pageSize={pageSize}
              totalCount={totalCount}
              disabled={isPlaceholderData}
              pageNumber={pageNum}
            />
          </>
        )}
      </QueryWrapper>
    </Container>
  );
};

const SelectFilter = ({ value = '', setValue = () => {} }) => {
  const locale = useLocale();

  const { data, isPending, isError } = usePublicSpecialization({
    pageNum: 'all',
  });

  const items = data?.data?.items;
  const hasData = data?.data?.totalCount;

  // HANDLE ERROR, No DATA AND LOADING MEESAGES
  const messages = useMemo(() => {
    if (isPending) return 'Loading ...';
    if (isError) return 'Error loading data';
    if (!hasData) return 'No data found';
  }, [isPending, isError, hasData]);

  // HANDLE GET SELECT OPTIONS
  const options = useMemo(() => {
    if (isPending) return [];
    if (isError) return [];
    if (!hasData) return [];

    const dataItems = items.map((item) => ({
      value: String(item.id),
      label: locale === 'ar' ? item.arName : item.enName,
    }));

    return [
      {
        value: '',
        label:
          locale === 'ar' ? 'جميع التخصصات' : 'All Specializations',
      },
      ...dataItems,
    ];
  }, [isPending, isError, hasData, items, locale]);

  return (
    <div>
      <Select
        classNames={{
          input:
            'focus:border-greenMain border-grayMedium placeholder:text-black placeholder:text-xs disabled:border-black/10 disabled:text-black/50 disabled:placeholder:text-black/50 rounded-lg font-bold text-sm mdl:text-medium !p-5 mdl:!p-7 w-48 mdl:w-full',
        }}
        checkIconPosition='right'
        data={options}
        disabled={options?.length === 0}
        allowDeselect={false}
        value={value}
        onChange={(value) => setValue(value)}
        rightSection={
          <ArrowDownBlack
            className={options?.length === 0 ? 'opacity-10' : ''}
          />
        }
        nothingFoundMessage={messages}
        searchable
      />
    </div>
  );
};
