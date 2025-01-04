'use client';

import { useLocale } from 'next-intl';

import { ContentCard, ContentTitle } from '../../_components';

export const Privacy = ({ data = [] }) => {
  const locale = useLocale();

  return data?.map((item) => (
    <ContentCard key={item.id} className='space-y-5'>
      <ContentTitle>{item.title[locale]}</ContentTitle>
      <ul className='space-y-3 list-disc list-outside ps-7'>
        {!!item.content[locale]?.length &&
          item.content[locale]?.map((content, index) => (
            <List key={index}>{content}</List>
          ))}
      </ul>
    </ContentCard>
  ));
};

const List = ({ children }) => (
  <li className='text-sm mdl:text-xl text-black'>{children}</li>
);
