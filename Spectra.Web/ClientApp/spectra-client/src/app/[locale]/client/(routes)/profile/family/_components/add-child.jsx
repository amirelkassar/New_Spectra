'use client';

import { useDisclosure } from '@mantine/hooks';

import { AddChildModal } from '@/client/_components/child';
import { AddButton } from '@/components/buttons/add-button';

export const AddChild = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AddChildModal opened={opened} close={close}>
      <AddButton onClick={open}>اضافة طفل</AddButton>
    </AddChildModal>
  );
};
