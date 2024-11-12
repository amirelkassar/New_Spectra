import Card from '@/components/card';
import { Section, SectionTitle } from '.';
import NoData from '@/assets/icons/no-data';

export const NoDataYet = ({
  icon = <NoData className='max-w-sm mdl:max-w-md' />,
  title = 'هذه الصفحة لا تحتوي علي بيانات في الوقت الحالي.',
  descriptions = [
    'يُرجى التفاعل مع الأنشطة أو العمليات المطلوبة لتسجيل البيانات هنا.',
    'سيتم تحديث المحتوى تلقائيًا عند توفر البيانات الجديدة.',
  ],
  children,
}) => {
  return (
    <Section id='no-data-yet'>
      <Card className='flex items-center justify-center flex-col gap-4 text-center !pb-10'>
        {icon}

        <SectionTitle id='no-data-yet'>
          {title}
        </SectionTitle>

        <div className='space-y-1'>
          {descriptions.map((d) => (
            <p key={d} className='text-sm mdl:text-xl'>
              {d}
            </p>
          ))}
        </div>

        {children}
      </Card>
    </Section>
  );
};
