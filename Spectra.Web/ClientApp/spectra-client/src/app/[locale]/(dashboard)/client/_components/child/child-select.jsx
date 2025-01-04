'use client';

import { Section } from '@/app/[locale]/(dashboard)/client/_components/ui';
import { ChildPopover } from '@/app/[locale]/(dashboard)/client/_components/child';
import { useChild } from '@/app/[locale]/(dashboard)/client/_hooks';

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
