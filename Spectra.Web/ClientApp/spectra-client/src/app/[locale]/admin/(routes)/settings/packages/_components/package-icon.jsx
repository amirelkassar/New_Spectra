import Package1Icon from '@/assets/icons/package1';
import Package2Icon from '@/assets/icons/package2';
import Package3Icon from '@/assets/icons/package3';
import Package4Icon from '@/assets/icons/package4';

export const PackageIcon = ({ iconCode }) => {
  if (!iconCode) return null;

  const icon = getIcon(iconCode);

  if (!icon) return null;
  return (
    <div className='bg-blueLight rounded-xl p-1 size-9 text-greenMain'>
      {icon}
    </div>
  );
};

function getIcon(iconCode) {
  switch (iconCode) {
    case 1:
      return (
        <Package1Icon className='w-full h-full max-w-full max-h-full' />
      );
    case 2:
      return (
        <Package2Icon className='w-full h-full max-w-full max-h-full' />
      );
    case 3:
      return (
        <Package3Icon className='w-full h-full max-w-full max-h-full' />
      );
    case 4:
      return (
        <Package4Icon className='w-full h-full max-w-full max-h-full' />
      );
    default:
      return null;
  }
}
