import StarGoldIcon from '@/assets/icons/starGold';

export const CellRate = ({ rate = '' }) => {
  if (!rate) return null;
  return (
    <span className='flex items-center gap-1 text-grayDark rounded-xl px-10 py-1 bg-blueLighter mdl:px-0 mdl:py-0 mdl:bg-transparent'>
      <span className='mt-0.5'>{rate}</span>
      <StarGoldIcon />
    </span>
  );
};
