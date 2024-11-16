'use client';

import { useRouter } from '@/navigation';
import { useSearchParams } from 'next/navigation';

export const useChat = () => {
  const isOpen = useSearchParams()?.get('view') === 'chat';

  const router = useRouter();

  const toggleChat = () => {
    if (!isOpen) {
      router.replace('?view=chat');
    } else {
      router.replace('?view=');
    }
  };

  return { toggleChat, isOpen };
};
