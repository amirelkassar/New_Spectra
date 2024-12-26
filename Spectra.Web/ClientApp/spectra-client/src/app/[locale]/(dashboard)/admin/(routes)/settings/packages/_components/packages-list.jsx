'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

import { PackageCardItem } from '@/components/packages';
import { QueryWrapper } from '@/components/query-wrapper';
import { usePackages } from '@/hooks/queries/admin/settings/packages';
import { PackageIcon } from '@/components/packages/package-icon';
import { ActionButtons } from '@/components/buttons/action-buttons';
import ROUTES from '@/routes';
import { useDeletePacakge } from '../_hooks/use-delete-package';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { Pagination } from '@/components/table/pagination';
import MultiSelectInput from '@/components/inputs/multi-select-input';
import { PACKAGES_TAGS_AR, PACKAGES_TAGS_EN } from '@/data';

export const PackagesList = () => {
  const { pageNum, search } = useQueryParams();

  const [tags, setTags] = useState([]);

  const query = usePackages({
    pageNum,
    search,
    tags,
  });

  const router = useRouter();

  const onView = useCallback(
    (id) =>
      router.push(ROUTES.ADMIN.SETTINGS.PACKAGES.PACKAGESDETAILS(id)),
    [router]
  );

  return (
    <QueryWrapper
      query={query}
      isFiltered={!!tags.length}
      isSearching={!!search}
    >
      {({ data, isPlaceholderData, pageSize, totalCount }) => (
        <div className='space-y-10'>
          <TagsFilter
            disabled={isPlaceholderData}
            tags={tags}
            setTags={setTags}
          />

          <div className='flex gap-5 flex-wrap *:shrink-0'>
            {data?.map((packageItem) => (
              <PackageCard
                key={packageItem.id}
                data={packageItem}
                onView={onView}
              />
            ))}
          </div>

          <Pagination
            pageSize={pageSize}
            pageNumber={pageNum}
            totalCount={totalCount}
            disabled={isPlaceholderData}
          />

          {!totalCount && !!tags.length && (
            <p className='text-grayDark'>
              لا يوجد باقات مطابقة لهذا النوع!
            </p>
          )}
        </div>
      )}
    </QueryWrapper>
  );
};

const PackageCard = ({ data = {}, onView = () => {} }) => {
  const locale = useLocale();

  const { arName, enName, id, price, services, discount, iconCode } =
    data;

  const features = useMemo(() => {
    if (!services?.length) return [];

    const key = locale === 'ar' ? 'arName' : 'enName';

    // Count occurrences of each service
    const serviceCounts = services.reduce((acc, service) => {
      const serviceName = service[key];
      acc[serviceName] = (acc[serviceName] || 0) + 1;
      return acc;
    }, {});

    // Generate the array with counts and names
    return Object.entries(serviceCounts).map(
      ([name, count]) => `${count} ${name}`
    );
  }, [services, locale]);

  return (
    <div className='flex flex-row-reverse sml:flex-col gap-4'>
      <PackageActions id={id} />

      <PackageCardItem
        role='button'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onView(id);
        }}
        data-id={id}
        className='flex-1'
      >
        <PackageCardItem.Title className='flex items-center gap-2'>
          <PackageIcon iconCode={iconCode} />
          {locale === 'ar' ? arName : enName}
        </PackageCardItem.Title>

        {discount ? (
          <PackageCardItem.PriceWithDiscount
            discount={discount}
            price={price}
            currancy='SAR'
          />
        ) : (
          <PackageCardItem.Price
            currancy='SAR'
            className='flex items-center gap-2'
          >
            {price?.toFixed(2)}
          </PackageCardItem.Price>
        )}

        <PackageCardItem.List features={features} />
      </PackageCardItem>
    </div>
  );
};

const PackageActions = ({ id }) => {
  const router = useRouter();

  const { onDelete } = useDeletePacakge(id);

  const onEdit = useCallback(
    (e, id) => {
      e.preventDefault();
      e.stopPropagation();
      router.push(ROUTES.ADMIN.SETTINGS.PACKAGES.PACKAGESEDIT(id));
    },
    [router]
  );
  return (
    <ActionButtons>
      <ActionButtons.Delete onClick={onDelete} />

      <ActionButtons.Edit
        onClick={(e) => onEdit(e, id)}
        className='text-greenMain'
      />
    </ActionButtons>
  );
};

const TagsFilter = ({ tags, setTags, disabled = false }) => {
  const locale = useLocale();

  const PACKAGES_TAGS =
    locale === 'ar' ? PACKAGES_TAGS_AR : PACKAGES_TAGS_EN;

  return (
    <div className='mdl:max-w-screen-sml'>
      <MultiSelectInput
        disabled={disabled}
        value={tags}
        onChange={setTags}
        data={PACKAGES_TAGS}
        size='xl'
        placeholder='فلتر بالنوع'
        classNames={{
          inputField: 'only:placeholder:text-black font-bold',
        }}
      />
    </div>
  );
};
