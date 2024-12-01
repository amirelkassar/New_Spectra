'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { usePackages } from '@/hooks/queries/admin/settings/packages';
import { useQueryParams } from '@/hooks/queries/use-query-params';

export const PackagesList = () => {
  const { pageNum, search } = useQueryParams();

  const query = usePackages(pageNum, search);

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({ data }) => {
        JSON.stringify(data);
      }}
    </QueryWrapper>
  );
};
