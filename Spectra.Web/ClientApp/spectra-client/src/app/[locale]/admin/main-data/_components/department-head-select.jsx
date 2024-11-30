'use client';

import { useMemo, useState } from 'react';
import {
  Combobox,
  useCombobox,
  ScrollArea,
  Rating,
} from '@mantine/core';
import Avatar from '@/components/avatar';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';
import InputGreen from '@/components/Input-green';
import { DoctorBadge } from '@/components/team';
import DeleteIcon from '@/assets/icons/delete';

const TEAM = [
  {
    id: '1',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
    rate: 9.5,
  },
  {
    id: '2',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
    rate: 9.5,
  },
  {
    id: '3',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
    rate: 9.5,
  },
  {
    id: '4',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
    rate: 9.5,
  },
  {
    id: '5',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
    rate: 9.5,
  },
];

export function DepartmentHeadSelect({
  label = '',
  defaultValue,
  error,
  onSelect = () => {},
}) {
  const defaultItem = useMemo(
    () => TEAM?.find((item) => item.id === defaultValue),
    [defaultValue]
  );

  const [search, setSearch] = useState(
    defaultItem?.doctor || ''
  );
  const [selectedItem, setSelectedItem] = useState(
    defaultItem || null
  );

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
    },
  });

  const options = useMemo(() => {
    return TEAM.filter((item) =>
      item.doctor
        .toLowerCase()
        .includes(search.toLowerCase().trim())
    ).map((item) => (
      <Combobox.Option
        className='text-xs md:text-base flex items-center gap-2 justify-evenly hover:bg-blueLighter border-b-2 border-grayLight last:border-transparent'
        value={item}
        key={item.id}
      >
        <Avatar
          src={item.avatar}
          name={item.doctor}
          className='size-9 md:size-12 rounded-full shrink-0'
        />

        <span className='font-bold'>{item.doctor}</span>

        {item.profession}

        <Rating
          dir='ltr'
          size={'md'}
          readOnly
          defaultValue={item.rate / 2}
        />
      </Combobox.Option>
    ));
  }, [search]);

  return (
    <div className='space-y-4'>
      <Combobox
        store={combobox}
        width='target'
        position='bottom-start'
        offset={0}
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          setSearch(val.doctor);
          onSelect({
            headDoctorId: val.id,
            headDoctorName: val.doctor,
          });
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
                  Nothing found
                </Combobox.Empty>
              )}
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      {selectedItem && (
        <DepartmentHead
          onRemove={() => {
            setSelectedItem(null);
            setSearch('');
          }}
          {...selectedItem}
        />
      )}
    </div>
  );
}

const DepartmentHead = ({
  doctor = '',
  profession = '',
  rate = '',
  onRemove = () => {},
}) => {
  return (
    <div className='flex items-start gap-2'>
      <DoctorBadge
        name={doctor}
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
