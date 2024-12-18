'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useDisclosure } from '@mantine/hooks';
import { Checkbox, Popover, ScrollArea } from '@mantine/core';
import { useMemo, useRef } from 'react';

import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';

export const ServicesSelect = ({
  data = [],
  isLoading = false,
  isError = false,
  isDataEmpty = false,
  selectedIds = [],
  placeholder = 'Select services',
  onSelect = () => {},
  onRemove = () => {},
}) => {
  const viewportRef = useRef(null);

  const locale = useLocale();

  const t = useTranslations('general_obj');

  const [opened, { toggle, close }] = useDisclosure(false);

  const totalSelected = useMemo(
    () => selectedIds.length,
    [selectedIds]
  );

  const totalSelectedText = useMemo(() => {
    return locale === 'en'
      ? `${totalSelected} Services Selected`
      : `تم تحديد ${totalSelected} خدمات`;
  }, [locale, totalSelected]);

  const servicesList = useMemo(() => {
    if (isLoading) return <NoData>{t('loading')}</NoData>;
    if (isError) return <NoData>{t('error_loading_data')}</NoData>;
    if (isDataEmpty) return <NoData>{t('no_data')}</NoData>;

    const nameKey = locale === 'en' ? 'enName' : 'arName';

    return data.map((s) => {
      const isSelected = selectedIds.includes(s?.id);

      return (
        <ServiceItem key={s?.id} name={s[nameKey]}>
          <Checkbox
            radius='xs'
            size='lg'
            color='#10B0C1'
            checked={isSelected}
            onChange={() => {
              if (isSelected) return onRemove(s?.id);
              return onSelect(s);
            }}
          />
        </ServiceItem>
      );
    });
  }, [
    data,
    onRemove,
    onSelect,
    selectedIds,
    isDataEmpty,
    isError,
    isLoading,
    t,
    locale,
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
          {!!totalSelected ? totalSelectedText : placeholder}
          <ArrowDownBlack className='lg:size-5 group-aria-expanded:rotate-180 transition-transform' />
        </button>
      </Popover.Target>
      <Popover.Dropdown className='shadow-md !p-0 border border-black rounded-lg overflow-x-hidden'>
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
    <div className='p-2 md:p-5 rounded-lg border-b-2 border-grayLight last:border-transparent'>
      <label className='text-xs lg:text-xl capitalize flex gap-2 lg:gap-4 items-center w-fit'>
        {children}
        <span className='flex-1'>{name}</span>
      </label>
    </div>
  );
};

const NoData = ({ children }) => (
  <div className='px-5 py-10 text-center text-sm lg:text-xl'>
    {children}
  </div>
);
