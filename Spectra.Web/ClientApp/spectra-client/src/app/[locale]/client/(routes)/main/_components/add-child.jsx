'use client';

import { useCallback, useEffect } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';

import { AddChildModal } from '@/client/_components/child';

export const AddChild = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const pathname = usePathname();

  const openAddChildModal =
    !!useSearchParams()?.get('add-child') || false;

  useEffect(() => {
    if (openAddChildModal) {
      open();
    }
  }, [openAddChildModal, open]);

  const onClose = useCallback(() => {
    // remove query param
    router.replace(pathname);
    close();
  }, [close, pathname, router]);

  return <AddChildModal opened={opened} close={onClose} />;
};
