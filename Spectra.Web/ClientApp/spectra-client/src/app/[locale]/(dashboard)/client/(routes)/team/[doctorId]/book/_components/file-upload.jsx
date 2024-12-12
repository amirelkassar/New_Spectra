import { Section } from '@/app/[locale]/(dashboard)/client/_components/ui';
import Card from '@/components/card';
import UploadInput from '@/components/inputs/upload-input';

export const FileUpload = () => {
  return (
    <Section>
      <Card>
        <UploadInput />
      </Card>
    </Section>
  );
};
