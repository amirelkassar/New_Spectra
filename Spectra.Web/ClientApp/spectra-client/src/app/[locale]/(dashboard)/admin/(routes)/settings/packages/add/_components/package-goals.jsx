import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import DeleteIcon from '@/assets/icons/delete';
import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import Card from '@/components/card';
import TextInput from '@/components/inputs/text-input';
import { useDebouncedCallback } from '@mantine/hooks';

export const PackageGoals = ({
  defaultValue = [],
  error,
  name = '',
  label = '',
  onChange = () => {},
}) => {
  const [list, setList] = useState(defaultValue);

  const [inputValue, setInputValue] = useState({
    arName: '',
    enName: '',
  });

  const isAddDisabled = useMemo(
    () =>
      !inputValue.arName?.trim() ||
      !inputValue.enName?.trim(),
    [inputValue]
  );

  // handle input change
  const handleInputChange = useCallback((e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // Handle adding a new item to the list
  const handleAddToList = useCallback(() => {
    if (
      !inputValue.arName?.trim() &&
      !inputValue.enName?.trim()
    )
      return;

    setList((prevList) => [
      ...prevList,
      { id: Date.now(), ...inputValue },
    ]);
    setInputValue({
      arName: '',
      enName: '',
    });
  }, [inputValue]);

  // Handle deleting an item from the list
  const handleDeleteItem = useCallback(
    (id) => {
      const updatedList = list.filter(
        (item) => item.id !== id
      );
      setList(updatedList);
    },
    [list]
  );

  // Handle editing an item directly in the input
  const handleEditItem = useCallback((e, id) => {
    setList((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [e.target.name]: e.target.value,
          };
        }
        return item;
      });
    });
  }, []);

  const debouncedOnChange = useDebouncedCallback(
    (value) => {
      onChange &&
        onChange({
          target: {
            name,
            value,
          },
        });
    },
    500
  );

  useEffect(() => {
    if (!list?.length) return;
    debouncedOnChange(list);
  }, [list, debouncedOnChange]);

  return (
    <Card className=''>
      {label && (
        <div className='text-base mdl:text-xl mb-5 ps-1'>
          {label}
        </div>
      )}
      <ul className='mdl:max-w-[80%]'>
        {list.map((item) => (
          <GoalList
            key={item.id}
            item={item}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
          />
        ))}
      </ul>
      {/* Input for adding new text */}
      <div className='flex items-center gap-4 mb-2 mdl:max-w-[80%]'>
        <TextInput
          size='xl'
          dir='rtl'
          value={inputValue.arName}
          onChange={handleInputChange}
          name='arName'
          placeholder='الهدف باللغة العربية'
          className='w-full flex-1'
          classNames={{
            input: 'text-right',
          }}
          error={error}
        />

        <TextInput
          size='xl'
          dir='ltr'
          value={inputValue.enName}
          onChange={handleInputChange}
          name='enName'
          placeholder='The goal in English'
          className='w-full flex-1'
          classNames={{
            input: 'text-left',
          }}
        />

        {/* Add Button */}
        <button
          onClick={handleAddToList}
          disabled={isAddDisabled}
          aria-disabled={isAddDisabled}
          className='aria-disabled:opacity-50 aria-disabled:cursor-not-allowed size-9 mdl:size-12'
        >
          <PlusInsideCircleIcon className='w-full h-full max-w-full max-h-full' />
        </button>
      </div>
    </Card>
  );
};

const Dot = () => (
  <div className='size-2 rounded-full bg-black' />
);

const GoalList = ({
  item,
  onEdit = () => {},
  onDelete = () => {},
}) => {
  if (!item || !Object.keys(item).length) return null;

  return (
    <li className='flex items-center gap-4 mb-2'>
      <TextInput
        value={item.arName}
        onChange={(e) => onEdit(e, item.id)}
        name='arName'
        className='w-full '
        placeholder='تعديل الهدف ...'
        leftSection={<Dot />}
        size='xl'
        dir='rtl'
        classNames={{
          input:
            'font-bold text-sm mdl:text-xl w-full text-right',
        }}
      />

      <TextInput
        dir='ltr'
        value={item.enName}
        onChange={(e) => onEdit(e, item.id)}
        name='enName'
        className='w-full '
        placeholder='Edit goal ...'
        rightSection={<Dot />}
        size='xl'
        classNames={{
          input:
            'font-bold text-sm mdl:text-xl w-full text-left pe-5 ps-14',
        }}
      />

      <div className='size-9 mdl:size-12 flex items-center justify-center ms-1 *:shrink-0'>
        <button
          type='button'
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete(item.id);
          }}
          className=' border-red border size-8 mdl:size-10 rounded-md flex items-center justify-center p-1'
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};
