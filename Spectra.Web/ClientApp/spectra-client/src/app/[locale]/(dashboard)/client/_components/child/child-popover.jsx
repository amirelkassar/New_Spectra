'use client';

import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Popover } from '@mantine/core';
import { useLocale } from 'next-intl';
import { useDisclosure } from '@mantine/hooks';

import { cn } from '@/lib/utils';
import Avatar from '@/components/avatar';
import ArrowDownMainGreen from '@/assets/icons/arrow-down-main-green';
import CheckIcon from '@/assets/icons/check';

export const ChildPopover = ({
  data = [],
  disabled = false,
  selected = {},
  onChange = () => {},
}) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [mounted, setMounted] = useState(false);

  const onSelect = useCallback(
    (child) => {
      onChange(child);
      close();
    },
    [close, onChange]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;

  if (!data.length) return <NoChild />;

  return (
    <Popover
      position='bottom'
      width='target'
      disabled={disabled || !data.length}
      opened={opened}
      onClose={close}
    >
      <Popover.Target>
        <Button
          role={disabled ? '' : 'button'}
          onClick={() => {
            if (!disabled) toggle();
          }}
        >
          <Child
            className='hover:bg-white !p-0'
            {...selected}
          />
          <Cheveron />
        </Button>
      </Popover.Target>

      <Popover.Dropdown className='shadow-md border-none rounded-lg !p-0'>
        {data?.map((child) => (
          <Child
            key={child.id}
            role='button'
            isSelected={selected.id === child.id}
            onClick={() => onSelect(child)}
            {...child}
          />
        ))}
      </Popover.Dropdown>
    </Popover>
  );
};

const Child = ({
  avatar = '',
  name = '',
  diagnosis = '',
  isSelected = false,
  ...props
}) => {
  const locale = useLocale();
  return (
    <div
      {...props}
      className={cn(
        'flex grow items-center mdl:px-5 p-3 gap-3 transition hover:bg-blueLighter relative',
        isSelected && 'bg-blueLighter',
        props.className
      )}
    >
      <Avatar
        className='size-7 mdl:size-14 rounded-full shrink-0'
        src={avatar}
        name={name}
        size='sm'
      />

      <h4 className='font-bold text-xs mdl:text-base min-w-36 sml:min-w-44 mdl:min-w-56'>
        {locale === 'ar' ? 'الطفل' : 'Child'} / {name}
      </h4>

      {diagnosis && (
        <p className='text-xs mdl:text-base'>{diagnosis}</p>
      )}

      {isSelected && <Check />}
    </div>
  );
};

const NoChild = () => {
  const locale = useLocale();

  return (
    <Button>
      <div className='flex grow items-center gap-3'>
        <div className='size-7 mdl:size-14 rounded-full shrink-0 bg-blueLight' />

        <h4 className='font-bold text-xs mdl:text-base min-w-44 mdl:min-w-56'>
          {locale === 'ar' ? 'لا يوجد أطفال' : 'No Childs'}
        </h4>
      </div>
    </Button>
  );
};

const Loading = () => {
  const locale = useLocale();

  return (
    <Button>
      <div className='flex grow items-center gap-3'>
        <div className='size-7 mdl:size-14 rounded-full shrink-0 bg-blueLight' />

        <h4 className='font-bold text-xs mdl:text-base min-w-44 mdl:min-w-56'>
          {locale === 'ar'
            ? 'جاري التحميل...'
            : 'Loading...'}
        </h4>
      </div>
    </Button>
  );
};

const Cheveron = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'bg-blueLighter rounded-full size-7 mdl:size-12 items-center shrink-0 justify-center flex transition group-aria-expanded:rotate-180',
        props?.className
      )}
    >
      <ArrowDownMainGreen
        strokeWidth={1.5}
        className='size-4 mdl:size-7 text-greenMain'
      />
    </div>
  );
};

const Check = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'shrink-0 absolute end-3 mdl:end-5 top-1/2 -translate-y-1/2 bg-white rounded-full size-7 mdl:size-12 flex items-center justify-center',
        props?.className
      )}
    >
      <CheckIcon className='size-4 mdl:size-7 text-greenMain' />
    </div>
  );
};

const Button = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'bg-white w-full flex items-center rounded-xl mdl:px-5 p-3 group border-2 border-greenLight lg:border-none',
          props?.className
        )}
      >
        {children}
      </div>
    );
  }
);

Button.displayName = 'Button';
