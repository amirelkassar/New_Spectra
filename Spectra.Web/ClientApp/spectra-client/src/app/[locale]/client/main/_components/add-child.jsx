'use client';

import { useEffect, useRef } from 'react';

import { AddChildModal } from '../../profile/_components/add-child-modal';
import { useSearchParams } from 'next/navigation';

export const AddChild = () => {
  const triggerRef = useRef(null);
  const openAddChildModal =
    !!useSearchParams()?.get('add-child') || false;

  useEffect(() => {
    if (openAddChildModal) {
      triggerRef.current.click();
    }
  }, [openAddChildModal]);

  return (
    <div>
      <AddChildModal
        trigger={
          <button ref={triggerRef} className='hidden' />
        }
      />
    </div>
  );
};
