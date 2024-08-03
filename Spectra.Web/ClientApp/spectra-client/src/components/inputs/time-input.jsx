'use client';
import { useRef } from 'react';
import { ActionIcon, rem } from '@mantine/core';
import { TimeInput as MantineTimeInput } from '@mantine/dates';
import TimeIcon from '@/assets/icons/time';

export default function TimeInput() {
  const ref = useRef(null);

  const pickerControl = (
    <ActionIcon
      variant='subtle'
      color='gray'
      onClick={() => ref.current?.showPicker()}
    >
      <TimeIcon />
    </ActionIcon>
  );

  return (
    <MantineTimeInput
      size='md'
      ref={ref}
      rightSection={pickerControl}
      className=''
    />
  );
}
