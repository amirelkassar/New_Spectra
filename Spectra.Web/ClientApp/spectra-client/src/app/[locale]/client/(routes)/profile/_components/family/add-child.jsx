'use client';

import { useDisclosure } from '@mantine/hooks';

import { AddChildModal } from '@/client/_components/child';
import { AddButton } from '@/components/buttons/add-button';

export const AddChild = ({ className = '' }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AddChildModal opened={opened} close={close}>
      <AddButton className={className} onClick={open}>
        اضافة طفل
      </AddButton>
    </AddChildModal>
  );
};
