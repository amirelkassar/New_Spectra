'use client';

import DeleteIcon from '@/assets/icons/delete';
import EditImgIcon from '@/assets/icons/editImg';
import { cn } from '@/lib/utils';

export const ActionButtons = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'flex items-center flex-col sml:flex-row gap-3',
        props.className
      )}
    >
      {children}
    </div>
  );
};

const Delete = ({ ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'border-red border rounded-md flex items-center justify-center p-1 size-7 mdl:size-9 transition-shadow hover:shadow-md',
        props.className
      )}
    >
      <DeleteIcon className='size-4' />
    </button>
  );
};

ActionButtons.Delete = Delete;

const Edit = ({ ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'border-greenMain border rounded-md flex items-center justify-center p-1 size-7 mdl:size-9 transition-shadow hover:shadow-md',
        props.className
      )}
    >
      <EditImgIcon className='size-4' />
    </button>
  );
};

ActionButtons.Edit = Edit;
