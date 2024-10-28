import Avatar from '@/components/avatar';

export const TeamMember = ({
  avatar = '',
  name = 'احمد محمد كمال',
  profession = 'اخصائى نفسي',
  rating = 4.9,
}) => {
  return (
    <div className='rounded-2xl cursor-grabbing lg:cursor-default bg-gradient-to-b from-[#f5f5f5] to-white p-5 lg:p-8 w-full max-w-full flex items-center justify-center'>
      <div className='flex flex-col items-center gap-2'>
        {/* AVATAR */}
        <Avatar
          name={name}
          src={avatar}
          className='size-16 lg:size-32 rounded-full lg:-mt-20 -mt-14'
        />
        <div className='flex-1 space-y-3 lg:space-y-5'>
          {/* NAME & TITLE */}
          <div>
            <h3 className='text-sm font-bold lg:text-medium text-black text-center'>
              د.
              {name}
            </h3>
            <p className='text-sm lg:text-medium text-center text-black'>
              {profession}
            </p>
          </div>
          {/* RATING */}
          <span className='bg-greenMain block text-white text-sm lg:text-base text-center rounded-xl w-full py-1 px-2'>
            &#9733; {rating}
          </span>
        </div>
      </div>
    </div>
  );
};
