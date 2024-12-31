'use client';

import { useLocale } from 'next-intl';

import {
  ContentCard,
  ContentTitle,
  ListParagraph,
  ListTitle,
} from '../../_components';

export const Terms = ({ data = [] }) => {
  const locale = useLocale();

  return data?.map((item) => (
    <ContentCard key={item.id} className='space-y-5'>
      <ContentTitle>{item.title[locale]}</ContentTitle>
      <div className='space-y-3'>
        {item.content?.map((content) => (
          <div key={content.id}>
            {content.title[locale] && (
              <ListTitle>{content.title[locale]}: </ListTitle>
            )}

            {content.paragraph[locale] && (
              <ListParagraph>
                {content.paragraph[locale]}
              </ListParagraph>
            )}
          </div>
        ))}
      </div>
    </ContentCard>
  ));
};
