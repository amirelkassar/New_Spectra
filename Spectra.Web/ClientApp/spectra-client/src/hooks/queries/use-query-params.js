import { useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  const pageNum = searchParams.get('page') || '1';

  const search = searchParams.get('search') || '';

  return { pageNum, search };
};
