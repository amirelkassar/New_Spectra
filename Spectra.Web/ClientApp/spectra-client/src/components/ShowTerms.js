'use client';

import ArrowAccordionIcon from '@/assets/icons/arrowAccordion';
import React from 'react';
import ShowMoreText from 'react-show-more-text';

function ShowTerms({ lines = 1, children }) {
  return (
    <ShowMoreText
      lines={lines}
      more={
        <span className='text-black font-Regular text-xs  inline-flex items-center gap-1 cursor-pointer'>
          Read More
          <ArrowAccordionIcon className='rotate-180 w-3 h-auto' />
        </span>
      }
      less={
        <span className='text-black   text-xs inline-flex items-center gap-1 font-Regular cursor-pointer'>
          Show Less
          <ArrowAccordionIcon className='w-3 h-auto' />
        </span>
      }
      expanded={false}
      width={0}
      truncatedEndingComponent={'... '}
      className='font-Regular text-grayDark text-xs w-full inline-block'
    >
      : {children}
    </ShowMoreText>
  );
}

export default ShowTerms;
