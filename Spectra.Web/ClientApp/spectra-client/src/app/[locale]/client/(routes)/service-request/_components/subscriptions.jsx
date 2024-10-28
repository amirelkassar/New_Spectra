import {
  PackageBadge,
  PackageTimeSchedule,
} from '@/client/_components/packages';

export const Subscriptions = () => {
  return (
    <section className='space-y-5'>
      <PackageBadge
        name='الباقة المميزة'
        price={100}
        icon='/badge.svg'
        features={[
          '4 جلسات من تخصص التخاطب',
          'الوصول لافضل النتائج والتوصيات',
          '1 جلسة اضافية لقياس الذكاء',
        ]}
        active
        subscribed
      />

      <PackageTimeSchedule
        title='الجدول الزمني لمواعيد الباقة'
        schedule={[
          {
            label: 'كشف',
            date: '2024-10-28T14:20:25.381Z',
            status: 'done',
          },
          {
            label: 'جلسة',
            date: '2024-10-28T14:20:25.381Z',
            status: 'done',
          },
          {
            label: 'متابعة',
            date: '2024-10-28T14:20:25.381Z',
            status: 'available',
          },
          {
            label: 'كشف',
            date: '2024-10-28T14:20:25.381Z',
            status: 'pending',
          },
          {
            label: 'جلسة',
            date: '2024-10-28T14:20:25.381Z',
            status: 'pending',
          },
        ]}
      />
    </section>
  );
};
