import Avatar from '@/components/avatar';

export const TeamMember = ({
  avatar = '',
  name = 'احمد محمد كمال',
  profession = 'اخصائى نفسي',
  rating = 4.9,
}) => {
  return (
    <div className='rounded-2xl mt-14 mdl:mt-20 cursor-grabbing bg-gradient-to-b from-[#f5f5f5] to-white p-5 lg:p-8 w-full max-w-full flex items-center justify-center shadow mb-3'>
      <div className='flex flex-col items-center gap-2'>
        {/* AVATAR */}
        <Avatar
          name={name}
          src={avatar}
          className='size-16 mdl:size-32 rounded-full mdl:-mt-20 -mt-14'
        />
        <div className='flex-1 space-y-3 lg:space-y-5'>
          {/* NAME & TITLE */}
          <div>
            <h3 className='text-sm font-bold mdl:text-medium text-black text-center'>
              د.
              {name}
            </h3>
            <p className='text-sm mdl:text-medium text-center text-black'>
              {profession}
            </p>
          </div>
          {/* RATING */}
          <span
            dir='ltr'
            className='bg-greenMain font-bold block text-white text-sm mdl:text-base text-center rounded-xl w-full py-1 px-2'
          >
            {rating} &#9733;
          </span>
        </div>
      </div>
    </div>
  );
};
