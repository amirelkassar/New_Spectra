'use client';

import { cn } from '@/lib/utils';
import { CONTRACT_STATE } from '@/data';
import { useGetContractState } from '@/dashboard/_hooks/use-get-contract-state';

export const ContractStatus = ({ state }) => {
  const contractState = useGetContractState(state);

  if (!contractState) return null;
  return <Badge state={state}>{contractState}</Badge>;
};

const Badge = ({ state, children }) => {
  return (
    <div
      className={cn(
        'rounded-xl px-5 py-2 font-bold text-xs mdl:text-base w-fit text-center',
        {
          'text-red bg-red/10': state === CONTRACT_STATE.canceled,
          'text-greenMain bg-greenMain/10':
            state === CONTRACT_STATE.contracting,
          'text-black bg-grayLight':
            state === CONTRACT_STATE.accepted,
        }
      )}
    >
      {children}
    </div>
  );
};
