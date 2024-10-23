'use client';

import { DoctorBadge } from '@/app/[locale]/client/_components/doctor-badge';
import { Info } from '@/app/[locale]/client/_components/info';
import { EditButton } from '@/components/buttons/edit-button';
import Card from '@/components/card';
import { EditChildInfoModal } from './edit-child-info-modal';

export const ChildInfo = () => {
  return (
    <div className='space-y-5'>
      <InfoData />

      <TreatmentTeam />
    </div>
  );
};

const CHILD_INFO_DATA = {
  main: {
    name: 'عبد الله الشيخ',
    idNumber: '25814739658',
    gender: 'ذكر',
    dateOfBirth: '10/10/2024',
    age: '8 سنوات - 3 أشهر',
    height: '90 سم',
    weight: '40 كيلوجرام',
    relationToPatient: 'ابن',
    diagnosis: 'اضطراب طيف التوحد',
  },

  details: {
    symptoms: [
      'صعوبة التواصل مع الآخرين عن طريق الكلام، وتكرار نفس العبارات',
      'الاهتمام الكبير بمواضيع أو أنشطة معينة، والالتزام بروتين يومي محدد، والانزعاج الشديد عند تغيير الروتين.',
    ],
    symptomsStart: 'في السنة الثانية',
    inheritedDiseases: 'وراثة',
    physicalSymptoms: 'لا يوجد',
    notes: [
      'انخفاض الاستجابة العاطفية بتعابير الوجه',
      'تأخر النطق والكلام',
    ],
  },
};

function arKey(key) {
  if (key === 'name') return 'الاسم';
  if (key === 'idNumber') return 'الرقم القومي';
  if (key === 'gender') return 'النوع';
  if (key === 'dateOfBirth') return 'تاريخ الميلاد';
  if (key === 'age') return 'العمر';
  if (key === 'height') return 'الطول';
  if (key === 'weight') return 'الوزن';
  if (key === 'relationToPatient')
    return 'علاقة العميل بالمريض';
  if (key === 'diagnosis') return 'التشخيص';
  if (key === 'symptoms') return 'اعراض الطفل';
  if (key === 'symptomsStart') return 'تاريخ ظهور الاعراض';
  if (key === 'inheritedDiseases') return 'وراثة ام مكتسبة';
  if (key === 'physicalSymptoms') return 'اعراض جسدية';
  if (key === 'notes') return 'ملحوظات';
  return key;
}

const InfoData = ({ data = CHILD_INFO_DATA }) => {
  return (
    <Card title='بيانات الطفل'>
      <div className='mdl:grid mdl:grid-cols-3'>
        {Object.entries(data.main).map(([key, value]) => (
          <Info
            key={key}
            title={arKey(key)}
            value={value}
            containerClassName='mdl:border-b-2 p-5 mdl:border-grayLight grid grid-cols-3 gap-5 mdl:block'
          />
        ))}
      </div>

      <div className='mdl:hidden h-[1px] w-screen bg-grayDark/50 my-5' />

      <div>
        {Object.entries(data.details).map(
          ([key, value]) => (
            <Info
              key={key}
              containerClassName='border-b-2 p-5 border-grayLight last:border-transparent'
              valueClassName='font-normal'
              titleClassName='font-bold'
              title={arKey(key)}
              value={value}
            />
          )
        )}
      </div>

      <div className='mt-10 w-full'>
        <EditChildInfoModal initialData={data}>
          <EditButton className='bg-greenMain hover:bg-greenMain/90 text-white w-full max-w-64 mx-auto lg:mx-0 flex'>
            تعديل
          </EditButton>
        </EditChildInfoModal>
      </div>
    </Card>
  );
};

const TreatmentTeam = ({
  team = [
    {
      name: 'احمد محمد كمال',
      profession: 'اخصائى نفسي',
      rate: '9.5',
      avatar: '',
    },
    {
      name: 'احمد محمد كمال',
      profession: 'اخصائى نفسي',
      rate: '9.5',
      avatar: '',
    },
  ],
}) => {
  return (
    <Card title='الفريق المعالج'>
      <div className='flex gap-5 flex-wrap mt-5'>
        {team.map((item, index) => (
          <DoctorBadge key={index} {...item} />
        ))}
      </div>
    </Card>
  );
};
