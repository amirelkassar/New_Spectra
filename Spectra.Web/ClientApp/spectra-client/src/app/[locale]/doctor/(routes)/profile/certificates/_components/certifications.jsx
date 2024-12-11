'use client';

import { useDisclosure } from '@mantine/hooks';

import { AddButton } from '@/components/buttons/add-button';
import { SectionTitle } from '@/components/dashboard/ui/section-title';
import { AttachmentModal } from '@/components/modal/attachment-modal';

import Card from '@/components/card';
import { useProfile } from '@/hooks/queries/user/profile';
import { QueryWrapper } from '@/components/query-wrapper';
import { Certificate } from '@/components/team/certificate';
import ADHD from '@/assets/icons/adhd';
import { useMemo } from 'react';

export const Certifications = () => {
  const [isOpen, { open, close }] = useDisclosure();

  return (
    <Card className='space-y-5 h-full'>
      <div className='flex items-center gap-5'>
        <SectionTitle>الشهادات</SectionTitle>
        <AddButton onClick={open}>اضافة شهادة</AddButton>
      </div>

      <Certificates />

      {/* <AttachmentModal
        error={error}
        isPending={isPending}
        onSubmit={onSubmit}
        title='أضافة شهادة'
        isOpen={isOpen}
        close={close}
      /> */}
    </Card>
  );
};

const Certificates = () => {
  const query = useProfile();

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <RenderCertificates attachments={data?.attachments || []} />
      )}
    </QueryWrapper>
  );
};

const RenderCertificates = ({ attachments }) => {
  const certificates = useMemo(
    () => attachments?.filter((attachment) => attachment.type === 3),
    [attachments]
  );

  if (!certificates?.length)
    return (
      <p className='text-grayDark'>
        <ADHD className='size-4 inline-block me-2' />
        لا يوجد شهادات
      </p>
    );
  return (
    <div className='flex flex-wrap gap-5'>
      {certificates.map((certificate) => (
        <Certificate
          key={certificate?.id}
          name={certificate?.name}
          image={certificate?.path}
          date={certificate?.created}
          id={certificate?.id}
        />
      ))}
    </div>
  );
};
