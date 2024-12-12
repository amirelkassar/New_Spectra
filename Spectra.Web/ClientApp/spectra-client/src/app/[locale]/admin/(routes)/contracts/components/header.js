'use client';
import React from 'react';
import ActionMenu from './ActionMenuPage';

function HeaderContracts() {
  return (
    <div className='flex items-center justify-between mb-4 md:mb-10  gap-4 md:gap-6'>
      <h2 className='headTitleDash'>العقود</h2>
      <ActionMenu />
    </div>
  );
}

export default HeaderContracts;
