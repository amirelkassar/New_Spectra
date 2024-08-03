'use client';
import { Avatar, Popover } from '@mantine/core';
import { useState } from 'react';

import ArrowDownMainGreen from '@/assets/icons/arrow-down-main-green';
import { cn } from '@/lib/utils';

const ChildPopover = ({
  data = [],
  disabled = false,
  selectedChild = 0,
  setSelectedChild = () => {},
  className = '',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      position='bottom'
      classNames={{
        dropdown: cn('min-w-[80%] !max-w-5xl', className),
      }}
      opened={open}
      onChange={setOpen}
      disabled={disabled}
    >
      <Popover.Target>
        <div
          role='button'
          onClick={() => setOpen(!open)}
          className='cursor-pointer bg-white w-full flex items-center justify-between mdl:rounded-xl px-2 p-1 lg:p-3 max-w-full border border-greenLight lg:border-none'
        >
          <Child className='hover:bg-white' {...data[selectedChild]} />
          <span
            className={cn(
              'bg-blueLight rounded-full size-7 lg:size-10 items-center justify-center flex transition',
              {
                'rotate-180': open,
              }
            )}
          >
            <ArrowDownMainGreen className='size-4 lg:size-7' />
          </span>
        </div>
      </Popover.Target>

      <div className='max-w-5xl'>
        <Popover.Dropdown className='shadow-md border-none space-y-5 px-0'>
          {data.map(
            (child) =>
              child.id !== selectedChild && (
                <div
                  key={child.id}
                  role='button'
                  onClick={() => {
                    setSelectedChild(child.id);
                    setOpen(false);
                  }}
                >
                  <Child
                    avatar={child.avatar}
                    fullname={child.fullname}
                    diagnosis={child.diagnosis}
                  />
                </div>
              )
          )}
        </Popover.Dropdown>
      </div>
    </Popover>
  );
};

export default ChildPopover;

const Child = ({
  avatar = '',
  fullname = '',
  diagnosis = '',
  className = '',
}) => {
  return (
    <div
      className={cn(
        'flex items-center p-2 gap-3 rounded-lg transition hover:bg-blueLight',
        className
      )}
    >
      <Avatar
        variant='filled'
        src={avatar || ''}
        className='size-[25px] mdl:size-[58px] min-w-max rounded-full inline-flex'
        color='cyan'
        radius='xl'
      >
        {fullname?.slice(0, 2)?.toUpperCase()}
      </Avatar>

      <div className='text-black flex items-center text-xs mdl:text-base w-fit gap-3'>
        <h4 className='font-bold w-fit'>الطفل / {fullname}</h4>
        <p className='w-fit'>{diagnosis}</p>
      </div>
    </div>
  );
};
