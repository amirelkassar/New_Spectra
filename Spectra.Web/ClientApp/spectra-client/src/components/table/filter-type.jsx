import FilterIcon from '@/assets/icons/filter';

export const FilterType = ({ children }) => {
  return (
    <div className='inline-flex items-center gap-3 font-bold text-xs lg:text-base'>
      <FilterIcon />
      {children}
    </div>
  );
};
