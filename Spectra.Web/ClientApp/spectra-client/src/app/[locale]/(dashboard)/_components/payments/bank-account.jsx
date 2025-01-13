'use client';

import DeleteIcon from '@/assets/icons/delete';
import Avatar from '@/components/avatar';
import { cn } from '@/lib/utils';

export const BankAccount = ({
  bankName = '',
  accountHolder = '',
  bankLogo = '',
  isDefault = false,
  onDelete = () => {},
  onView = () => {},
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-3 border border-grayDark py-3 px-5 w-full rounded-xl transition ring-2 ring-transparent hover:ring-grayMedium',
        isDefault && 'border-greenMain'
      )}
    >
      <div
        role='button'
        className='flex-1 flex items-center gap-3 peer'
        onClick={onView}
      >
        <Avatar
          name={bankName}
          src={bankLogo}
          className='size-11 mdl:size-14 rounded-full'
        />

        <div>
          <h3 className='font-bold text-xs capitalize mdl:text-base text-[#1D3A70]'>
            {bankName}
          </h3>
          <p className='text-xs mdl:text-base capitalize text-[#6B7280]'>
            {accountHolder}
          </p>
        </div>
      </div>

      <button
        className='transition hover:bg-red/15 p-2 rounded-sm shrink-0'
        onClick={onDelete}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
