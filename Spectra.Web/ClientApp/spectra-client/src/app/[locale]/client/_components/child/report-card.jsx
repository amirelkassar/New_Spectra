'use client';

import MenuActions from '@/components/menu-actions';
import man from '@/assets/images/placeholder-person.png';
import Avatar from '@/components/avatar';
import Button from '@/components/button';

export const ReportCard = ({
  data,
  onClick = () => {},
  showActionMenu = false,
  clickable = false,
}) => {
  return (
    <div
      onClick={(e) => {
        if (!clickable) return;
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      role={clickable ? 'button' : ''}
      style={{
        boxShadow: '0px 4px 10.4px 0px #D7F0F680',
      }}
      className='rounded-lg space-y-5 w-full p-5 border-s-4 border-greenMain transition hover:bg-blueLight'
    >
      {/* HEADING */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <h5 className='text-xs mdl:text-base'>
            تقرير: {data?.reportNo}
          </h5>
          <p className='text-xs mdl:text-base'>
            {data?.date}
          </p>
        </div>

        {showActionMenu && (
          <Button
            onClick={(e) => e.stopPropagation()}
            className='!p-1 rounded-sm'
            variant='ghost'
          >
            <MenuActions />
          </Button>
        )}
      </div>

      {/* REPORT TITLE */}
      <h4 className='text-base mdl:text-xl font-bold'>
        {data?.reportTitle}
      </h4>

      {/* DOCTOR */}
      <div className='flex gap-2 items-center border-t border-grayDark/50 pt-5'>
        <Avatar className='size-9' src={man.src} />
        <p>الاخصائى: {data?.doctorName}</p>
      </div>
    </div>
  );
};
