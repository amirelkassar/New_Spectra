export const Info = ({ data, label = '', icon }) => {
  return (
    <div className='pb-5 border-b border-grayLight last:border-transparent'>
      <h3 className='font-bold mb-2 text-xs md:text-base'>
        {label}
      </h3>
      {icon ? (
        <div className='flex items-center gap-5'>
          <div className='flex bg-blueLight size-6 md:size-10 rounded-full items-center justify-center shrink-0'>
            {icon}
          </div>
          <p className='text-sm md:text-xl'>{data}</p>
        </div>
      ) : (
        <p className='text-sm md:text-xl'>{data}</p>
      )}
    </div>
  );
};
