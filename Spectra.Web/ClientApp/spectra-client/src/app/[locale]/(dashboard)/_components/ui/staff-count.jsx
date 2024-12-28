import StaffIcon from '@/assets/icons/staff';

export const StaffCount = ({ children }) => {
  if (!children) return null;
  return (
    <div className='font-bold text-greenMain text-sm mdl:text-base flex items-center gap-1'>
      <StaffIcon className='fill-greenMain size-3' />
      {children}
    </div>
  );
};
