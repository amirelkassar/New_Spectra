'use client';

import { useDisclosure } from '@mantine/hooks';
import { Popover, ScrollArea } from '@mantine/core';
import { useCallback, useMemo, useRef } from 'react';

import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';
import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import Minus from '@/assets/icons/minus';

export const ServicesSelect = ({
  data = [],
  isLoading = false,
  isError = false,
  isDataEmpty = false,
  selectedFreelance = [],
  selectedSpectra = [],
  onFreelanceSelect = () => {},
  onSpectraSelect = () => {},
}) => {
  const viewportRef = useRef(null);

  const [opened, { toggle, close }] = useDisclosure(false);

  const totalSelected = useMemo(() => {
    return new Set([...selectedFreelance, ...selectedSpectra]).size;
  }, [selectedFreelance, selectedSpectra]);

  const handleSelect = useCallback(
    (service, type) => {
      if (type === 'freelance') onFreelanceSelect(service);

      if (type === 'spectra') onSpectraSelect(service);
    },
    [onFreelanceSelect, onSpectraSelect]
  );

  const servicesList = useMemo(() => {
    if (isLoading) return <NoData>Loading services...</NoData>;
    if (isError) return <NoData>Error Loading services!</NoData>;
    if (isDataEmpty) return <NoData>No services found!</NoData>;

    return data.map((s) => {
      const isFreelanceSelected = selectedFreelance.includes(s.id);
      const isSpectraSelected = selectedSpectra.includes(s.id);

      return (
        <ServiceItem key={s?.id} name={s?.enName}>
          <Button
            aria-pressed={isFreelanceSelected}
            onClick={(e) => {
              e.stopPropagation();
              if (!isFreelanceSelected) handleSelect(s, 'freelance');
            }}
          >
            freelance
          </Button>
          <Button
            aria-pressed={isSpectraSelected}
            onClick={(e) => {
              e.stopPropagation();
              if (!isSpectraSelected) handleSelect(s, 'spectra');
            }}
          >
            spectra team
          </Button>
        </ServiceItem>
      );
    });
  }, [
    data,
    handleSelect,
    selectedFreelance,
    selectedSpectra,
    isDataEmpty,
    isError,
    isLoading,
  ]);

  return (
    <Popover
      opened={opened}
      onClose={close}
      width='target'
      position='bottom'
    >
      <Popover.Target>
        <button
          onClick={toggle}
          className='group border border-black rounded-lg px-5 py-3 w-full max-w-2xl flex items-center justify-between text-sm lg:text-xl transition ring-1 ring-transparent hover:ring-greenMain hover:border-greenMain aria-expanded:ring-greenMain aria-expanded:border-greenMain'
        >
          {!!totalSelected
            ? `${totalSelected} Services selected`
            : 'Choose services'}
          <ArrowDownBlack className='lg:size-5 group-aria-expanded:rotate-180 transition-transform' />
        </button>
      </Popover.Target>
      <Popover.Dropdown
        dir='ltr'
        className='shadow-md !p-0 border border-black rounded-lg overflow-x-hidden'
      >
        <ScrollArea.Autosize
          viewportRef={viewportRef}
          mah={320}
          type='always'
          scrollbars='y'
        >
          {servicesList}
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
};

const ServiceItem = ({ name = '', children }) => {
  return (
    <div className='p-2 md:p-5 rounded-lg flex gap-2 lg:gap-4 items-center border-b-2 border-grayLight last:border-transparent'>
      <span className='text-xs lg:text-xl capitalize flex-1'>
        {name}
      </span>
      {children}
    </div>
  );
};

const Button = ({ children = '', ...props }) => {
  return (
    <button
      className='py-1 px-2 rounded-xl bg-greenMain text-white capitalize flex items-center gap-2 text-xs lg:text-base font-bold aria-pressed:bg-grayLight aria-pressed:text-grayDark aria-pressed:pointer-events-none group'
      {...props}
    >
      <PlusInsideCircleIcon className='text-white size-3 lg:size-4 shrink-0 group-aria-pressed:hidden' />
      <Minus className='text-grayDark size-3 lg:size-4 shrink-0 hidden group-aria-pressed:block' />
      {children}
    </button>
  );
};

const NoData = ({ children }) => (
  <div className='px-5 py-10 text-center text-sm lg:text-xl'>
    {children}
  </div>
);
