'use client';

import { cn } from '@/lib/utils';
import { useContractStore } from '@/dashboard/_hooks/use-contract-store';

export const Chat = () => {
  const isOpen = useContractStore((s) => s.isChatOpen);

  return (
    <div
      className={cn(
        'rounded-xl bg-white w-0 transition-[width,padding,margin] duration-500 ease-in-out shrink-0 text-nowrap overflow-hidden',
        isOpen && 'me-3 w-80 p-1 mdl:p-5'
      )}
    >
      CHAT
    </div>
  );
};
