'use client';

import { Section } from '@/client/_components/ui';
import { ChildPopover } from '@/client/_components/child';
import { useChild } from '@/client/_hooks';

export const ChildSelect = ({ data = [] }) => {
  const { getChild, setChild } = useChild();

  const selected = getChild();

  return (
    <Section>
      <ChildPopover
        data={data}
        selected={selected}
        onChange={setChild}
      />
    </Section>
  );
};
