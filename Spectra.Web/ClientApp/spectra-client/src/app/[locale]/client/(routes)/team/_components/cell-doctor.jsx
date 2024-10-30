import Avatar from '@/components/avatar';

export const CellDoctor = ({ row }) => {
  if (!row) return null;
  const doctor = row.original.doctor;
  const avatar = row.original.avatar;
  return (
    <div className='flex items-center gap-5 w-full min-w-max'>
      <Avatar
        name={doctor}
        src={avatar}
        className='lg:size-14 size-10'
      />
      <span className='font-bold'>{doctor}</span>
    </div>
  );
};
