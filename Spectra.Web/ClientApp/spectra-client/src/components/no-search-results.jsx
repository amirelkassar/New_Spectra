import NoSearchResultsIcon from '@/assets/icons/no-search-results';

export const NoSearchResults = () => {
  return (
    <div className='flex-1 h-full'>
      <NoSearchResultsIcon className='block mx-auto max-w-full mb-10' />

      <p className='text-sm mdl:text-xl text-center max-w-2xl mx-auto'>
        لا توجد نتائج حالياً. حاول استخدام كلمات بحث مختلفة
        أو تحقق من الكتابة.
      </p>
    </div>
  );
};
