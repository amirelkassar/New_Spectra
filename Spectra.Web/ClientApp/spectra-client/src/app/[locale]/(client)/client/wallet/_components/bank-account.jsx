'use client';

import DeleteIcon from '@/assets/icons/delete';
import Avatar from '@/components/avatar';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';

export const BankAccount = ({
  bankName = '',
  accountHolder = '',
  bankLogo = '',
}) => {
  const { open } = useConfirmModal();

  const handleDelete = () => {
    open({
      onConfirm: async () => {
        console.log('confirm clicked');
      },
    });
  };

  return (
    <div className='flex items-center gap-3 border-2 border-grayLight py-3 px-5 w-full'>
      <div className='flex-1 flex items-center gap-3'>
        <Avatar
          name={bankName}
          src={bankLogo}
          className='size-11 lg:size-14 rounded-full'
        />

        <div>
          <h3 className='font-bold text-xs lg:text-base text-[#1D3A70]'>
            {bankName}
          </h3>
          <p className='text-xs lg:text-base text-[#6B7280]'>
            {accountHolder}
          </p>
        </div>
      </div>

      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};
