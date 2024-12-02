'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Combobox,
  useCombobox,
  ScrollArea,
} from '@mantine/core';
import {
  useDebouncedValue,
  useDebouncedCallback,
} from '@mantine/hooks';
import { ReactSortable } from 'react-sortablejs';

import Card from '@/components/card';
import TextInput from '@/components/inputs/text-input';
import { ArrowDownBlack } from '@/assets/icons/arrow-down-main-green';
import { useServicesForListing } from '@/hooks/queries/admin/main-data/services';
import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import { useLocale } from 'next-intl';
import DeleteIcon from '@/assets/icons/delete';

export const ContentSelect = ({
  defaultValue = [],
  onChange,
  error,
  name = '',
  label = '',
}) => {
  const [addedItems, setAddedItems] =
    useState(defaultValue);

  const [uniqueItems, setUniqueItems] = useState(() => {
    if (!defaultValue?.length) return [];
    const unique = [];
    defaultValue.forEach((item) => {
      if (!unique.find((i) => i.id === item.id)) {
        unique.push(item);
      }
    });
    return unique;
  });

  const [search, setSearch] = useState('');

  const [debounced] = useDebouncedValue(search, 500);

  const { data, isError, isPending } =
    useServicesForListing({
      serviceType: '2',
      search: debounced,
    });

  const items = data?.data?.items;
  const hasData = data?.data?.totalCount;

  // HANDLE ERROR, No DATA AND LOADING MEESAGES
  const messages = useMemo(() => {
    if (isPending) return 'Loading ...';
    if (isError) return 'Error loading data';
    if (!hasData) return 'No data found';
  }, [isPending, isError, hasData]);

  const handleDelete = useCallback((itemToDelete) => {
    setAddedItems((prev) => {
      const filteredItems = prev.filter(
        (item) =>
          item.id !== itemToDelete.id ||
          item.order !== itemToDelete.order
      );

      return filteredItems.map((item, index) => ({
        ...item,
        order: index + 1,
      }));
    });

    setUniqueItems((prev) => {
      const existingItem = prev.find(
        (uniqueItem) => uniqueItem.id === itemToDelete.id
      );

      if (existingItem) {
        // إذا كان العنصر موجودًا، قم بتقليل العداد
        if (existingItem.count > 1) {
          // إذا كان العداد أكبر من 1، قلل العداد فقط
          return prev.map((uniqueItem) =>
            uniqueItem.id === itemToDelete.id
              ? {
                  ...uniqueItem,
                  count: uniqueItem.count - 1,
                }
              : uniqueItem
          );
        } else {
          // إذا أصبح العداد صفرًا، أزل العنصر من القائمة
          return prev.filter(
            (uniqueItem) =>
              uniqueItem.id !== itemToDelete.id
          );
        }
      }

      // إذا لم يكن العنصر موجودًا في uniqueItems، لا تقم بأي تعديل
      return prev;
    });
  }, []);

  const debouncedOnChange = useDebouncedCallback(
    (updatedList) => {
      const value = updatedList.map((c) => ({
        id: c.id,
        order: c.order,
      }));

      onChange({
        target: {
          name,
          value,
        },
      });
    },
    500
  );

  const handleUpdateOrder = useCallback((newList) => {
    const updatedList = newList.map((item, index) => ({
      ...item,
      order: index + 1, // الترتيب الجديد بناءً على الموضع
    }));
    setAddedItems(updatedList);
  }, []);

  useEffect(() => {
    if (!addedItems?.length) return;

    debouncedOnChange(addedItems);
  }, [addedItems, debouncedOnChange]);

  return (
    <Card className='space-y-5'>
      {label && (
        <div className='text-base mdl:text-xl mb-2 ps-1'>
          {label}
        </div>
      )}

      <div className='flex items-center gap-5 flex-wrap *:shrink-0'>
        <SelectedView items={uniqueItems} />
      </div>

      <SelectInput
        data={items}
        messages={messages}
        search={search}
        onSearch={setSearch}
        label={label}
        error={error}
        onAdd={setAddedItems}
        setUniqueItems={setUniqueItems}
      />

      <div className='space-y-2'>
        {!!addedItems.length && (
          <p className='text-sm mdl:text-xl mb-3 text-grayDark'>
            يمكنك السحب والإفلات للأقسام لإعادة ترتيبها،{' '}
          </p>
        )}

        <ReactSortable
          list={addedItems}
          setList={handleUpdateOrder}
          animation={200}
          delay={1}
          className='flex flex-col gap-2 mdl:max-w-[80%]'
          easing='ease-out'
        >
          <SortableItems
            items={addedItems}
            onDelete={(item) => handleDelete(item)}
          />
        </ReactSortable>
      </div>
    </Card>
  );
};

const SelectInput = ({
  data,
  messages,
  error,
  search = '',
  onSearch = () => {},
  onAdd = () => {},
  setUniqueItems = () => {},
}) => {
  const combobox = useCombobox();

  const onClick = useCallback(
    (e, item) => {
      e.preventDefault();
      e.stopPropagation();
      onAdd((prev) => [
        ...prev,
        {
          id: item.id,
          arName: item.arName,
          enName: item.enName,
          order: prev?.length + 1,
        },
      ]);

      setUniqueItems((prev) => {
        const existingItem = prev.find(
          (uniqueItem) => uniqueItem.id === item.id
        );

        if (existingItem) {
          // إذا كان العنصر موجودًا، قم بزيادة العداد
          return prev.map((uniqueItem) =>
            uniqueItem.id === item.id
              ? {
                  ...uniqueItem,
                  count: uniqueItem.count + 1,
                }
              : uniqueItem
          );
        } else {
          // إذا كان العنصر جديدًا، أضفه مع count = 1
          return [...prev, { ...item, count: 1 }];
        }
      });
    },
    [onAdd, setUniqueItems]
  );

  const options = useMemo(() => {
    if (!data) return [];
    return data.map((item) => (
      <Combobox.Option
        className='text-sm mdl:text-xl flex items-center gap-4 justify-between border-b-2 border-grayLight last:border-transparent px-10 hover:bg-transparent py-3 cursor-auto'
        key={item?.id}
      >
        {item?.arName}
        <button
          type='button'
          onClick={(e) => onClick(e, item)}
        >
          <PlusInsideCircleIcon className='size-8' />
        </button>
      </Combobox.Option>
    ));
  }, [data, onClick]);

  return (
    <Combobox
      store={combobox}
      width='target'
      position='bottom-start'
      offset={5}
    >
      <Combobox.Target>
        <TextInput
          name='departmentHead'
          size='xl'
          error={error}
          value={search}
          onChange={(event) =>
            onSearch(event.currentTarget.value)
          }
          rightSection={<ArrowDownBlack />}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          classNames={{
            section:
              'peer-data-[expanded=true]:rotate-180 transition-transform',
            input: 'transition-none peer',
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown className='rounded-xl overflow-hidden border-greenMain'>
        <Combobox.Options>
          <ScrollArea.Autosize type='scroll' mah={300}>
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
  );
};

const SelectedView = ({ items }) => {
  const locale = useLocale();

  if (!items.length) return null;
  return items.map((i) => (
    <div
      key={i.id}
      className='bg-blueLight px-5 py-2 rounded-xl'
    >
      {i.count} {locale === 'ar' ? i.arName : i.enName}
    </div>
  ));
};

const SortableItems = ({ items, onDelete = () => {} }) => {
  const locale = useLocale();

  if (!items.length) return null;
  return items.map((item, index) => (
    <div
      key={index}
      className='flex gap-3 items-center group'
    >
      <div className='sortable-item relative border-4 border-blueLight rounded-xl p-3 text-sm mdl:text-xl font-bold flex items-center gap-2 flex-1 group-[draggable=true]:cursor-grabbing cursor-grab'>
        <div className='absolute inset-0 z-10 pointer-events-none bg-transparent' />
        <span className='bg-black text-white size-6 flex items-center justify-center rounded-full p-1 shrink-0 text-xs mdl:text-base !pointer-events-none'>
          {item?.order}
        </span>
        <span className='!pointer-events-none'>
          {locale === 'ar' ? item.arName : item.enName}
        </span>
      </div>

      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDelete(item);
        }}
        className=' border-red border size-8 mdl:size-10 rounded-md flex items-center justify-center p-1'
      >
        <DeleteIcon />
      </button>
    </div>
  ));
};
