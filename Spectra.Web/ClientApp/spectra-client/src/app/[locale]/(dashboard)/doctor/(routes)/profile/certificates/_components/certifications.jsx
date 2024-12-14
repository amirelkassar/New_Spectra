'use client';

import { memo, useMemo } from 'react';
import { useDisclosure } from '@mantine/hooks';

import { AddButton } from '@/components/buttons/add-button';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { useProfile } from '@/hooks/queries/user/profile';
import { QueryWrapper } from '@/components/query-wrapper';
import { Certificate } from '@/components/team/certificate';
import { AttachmentModal } from '@/components/modal/attachment-modal';
import { useAddCertificate } from '../../_hooks/use-add-certificate';

import ADHD from '@/assets/icons/adhd';
import Card from '@/components/card';
import { useCertificateActions } from '../../_hooks/use-certificate-actions';

export const Certifications = () => {
  const [isOpen, { open, close }] = useDisclosure();

  const { error, isPending, onSubmit } = useAddCertificate();

  return (
    <Card className='space-y-5 h-full'>
      <div className='flex items-center gap-5'>
        <SectionTitle>الشهادات</SectionTitle>
        <AddButton onClick={open}>اضافة شهادة</AddButton>
      </div>

      <Certificates />

      <AttachmentModal
        error={error}
        isPending={isPending}
        onSubmit={onSubmit}
        title='أضافة شهادة'
        isOpen={isOpen}
        close={close}
      />
    </Card>
  );
};

const Certificates = memo(() => {
  const query = useProfile();

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <RenderCertificates attachments={data?.attachments || []} />
      )}
    </QueryWrapper>
  );
});

Certificates.displayName = 'Certificates';

const RenderCertificates = ({ attachments }) => {
  const certificates = useMemo(
    () => attachments?.filter((attachment) => attachment.type === 3),
    [attachments]
  );

  const actions = useCertificateActions();

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
          actions={actions}
          isEdit
        />
      ))}
    </div>
  );
};
