'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Combobox,
  useCombobox,
  ScrollArea,
} from '@mantine/core';

import Avatar from '@/components/avatar';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';
import InputGreen from '@/components/Input-green';
import { DoctorBadge } from '@/components/team';
import DeleteIcon from '@/assets/icons/delete';
import { useMedicalProviders } from '@/hooks/queries/admin/staff/staff';
import { useLocale } from 'next-intl';

export function DepartmentHeadSelect({
  label = '',
  defaultValue,
  error,
  onSelect = () => {},
  onRemove = () => {},
}) {
  const locale = useLocale();

  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const { data, isError, isPending, isPlaceholderData } =
    useMedicalProviders({
      pageNum: 'all',
      search: search.toLocaleLowerCase().trim(),
    });

  const items = data?.data?.items;
  const hasData = data?.data?.totalCount;

  // HANDLE ERROR, No DATA AND LOADING MEESAGES
  const messages = useMemo(() => {
    if (isPending || isPlaceholderData)
      return 'Loading ...';
    if (isError) return 'Error loading data';
    if (!hasData) return 'No data found';
  }, [isPending, isError, hasData, isPlaceholderData]);

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
    },
  });

  useEffect(() => {
    if (!defaultValue) return;
    if (isPending || isPlaceholderData) return;
    const item = items.find(
      (item) => item.id === defaultValue
    );
    setSelectedItem(item);
  }, [defaultValue, isPending, isPlaceholderData, items]);

  const options = useMemo(() => {
    if (isPending || isPlaceholderData) return [];
    return items.map((item) => (
      <Combobox.Option
        className='text-xs md:text-base flex items-center gap-2 justify-evenly hover:bg-blueLighter border-b-2 border-grayLight last:border-transparent aria-selected:bg-blueLight'
        value={item}
        key={item?.id}
        aria-selected={selectedItem === item.id}
      >
        <Avatar
          src={''}
          name={`${item?.firstName} ${item?.lastName}`}
          className='size-9 md:size-12 rounded-full shrink-0'
        />

        <span className='font-bold'>{`${item?.firstName} ${item?.lastName}`}</span>

        {locale === 'ar'
          ? item?.mainSpecializationArName
          : item?.mainSpecializationEnName}

        {/* <Rating
            dir='ltr'
            size={'md'}
            readOnly
            defaultValue={item.rate / 2}
          /> */}
      </Combobox.Option>
    ));
  }, [
    locale,
    selectedItem,
    isPending,
    isPlaceholderData,
    items,
  ]);

  return (
    <div className='space-y-4'>
      {!selectedItem && (
        <Combobox
          store={combobox}
          width='target'
          position='bottom-start'
          offset={0}
          onOptionSubmit={(val) => {
            setSelectedItem(val);
            onSelect(val.id);
            combobox.closeDropdown();
          }}
        >
          <Combobox.Target>
            <InputGreen
              label={label}
              name='departmentHead'
              value={search}
              onChange={(event) =>
                setSearch(event.currentTarget.value)
              }
              rightSection={<ArrowDownBlack />}
              onClick={() => combobox.openDropdown()}
              onFocus={() => combobox.openDropdown()}
              onBlur={() => combobox.closeDropdown()}
              classNames={{
                section:
                  'peer-data-[expanded=true]:rotate-180 transition-transform',
                input:
                  'data-[expanded=true]:rounded-b-none data-[expanded=true]:border-b-0 transition-none',
              }}
            />
          </Combobox.Target>

          {error && (
            <p className='text-xs md:text-base text-red !m-0'>
              {error}
            </p>
          )}

          <Combobox.Dropdown className='rounded-xl overflow-hidden border-greenMain rounded-t-none border-t-0'>
            <Combobox.Options>
              <ScrollArea.Autosize type='scroll' mah={200}>
                {!!options?.length ? (
                  options
                ) : (
                  <Combobox.Empty className='p-5 min-h-[200px] text-center text-sm text-gray-500 flex items-center justify-center'>
                    {messages}
                  </Combobox.Empty>
                )}
              </ScrollArea.Autosize>
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      )}

      {selectedItem && (
        <div>
          <div className='text-sm md:text-base font-medium mb-2'>
            رئيس القسم
          </div>
          <DepartmentHead
            onRemove={() => {
              setSelectedItem(null);
              setSearch('');
              onRemove();
            }}
            {...selectedItem}
          />
        </div>
      )}
    </div>
  );
}

const DepartmentHead = ({
  firstName = '',
  lastName = '',
  mainSpecializationArName = '',
  mainSpecializationEnName = '',
  rate = '',
  onRemove = () => {},
}) => {
  const locale = useLocale();

  const profession =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  return (
    <div className='flex items-start gap-2'>
      <DoctorBadge
        name={`${firstName} ${lastName}`}
        profession={profession}
        rate={rate}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRemove();
        }}
        type='button'
        className='border-red duration-200 hover:shadow-md border rounded-md w-9 md:w-12 h-9 md:h-12 flex items-center justify-center'
      >
        <DeleteIcon className='w-4 md:w-5 h-auto' />
      </button>
    </div>
  );
};
