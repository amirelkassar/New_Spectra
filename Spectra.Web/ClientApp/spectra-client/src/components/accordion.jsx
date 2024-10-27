import React from 'react';

import {
  Accordion as MantineAccordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from '@mantine/core';

export function Accordion({ children }) {
  return (
    <MantineAccordion
      chevronSize={24}
      multiple
      chevronPosition='right'
      variant='separated'
      classNames={{
        item: '!border-[3px] !border-blueLight bg-white rounded-lg',
      }}
    >
      {children}
    </MantineAccordion>
  );
}

Accordion.Label = React.memo(
  React.forwardRef(function Label({ children }, ref) {
    return (
      <AccordionControl
        classNames={{
          label:
            'text-start text-xs mdl:text-base font-bold',
        }}
        ref={ref}
      >
        {children}
      </AccordionControl>
    );
  })
);
Accordion.Content = React.memo(
  React.forwardRef(function Content({ children }, ref) {
    return (
      <AccordionPanel ref={ref}>{children}</AccordionPanel>
    );
  })
);
Accordion.Item = React.memo(
  React.forwardRef(function Item({ value, children }, ref) {
    return (
      <AccordionItem ref={ref} value={value}>
        {children}
      </AccordionItem>
    );
  })
);
