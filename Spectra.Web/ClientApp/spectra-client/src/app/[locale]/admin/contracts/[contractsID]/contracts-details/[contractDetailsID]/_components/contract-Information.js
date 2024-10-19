'use client';
import ContractsWhiteIcon from '@/assets/icons/contractsWhite';
import EditIcon from '@/assets/icons/edit';
import Card from '@/components/card';
import { Link, usePathname } from '@/navigation';
import ROUTES from '@/routes';
import React, { useState } from 'react';
import ServicesFreelancer from './services-freelancer';
import ServicesMember from './services-member';
import Button from '@/components/button';
import RefuseIcon from '@/assets/icons/refuse';
import AcceptIcon from '@/assets/icons/accept';
import useModal from '@/store/modal-slice';
import ContractsTextDetails from '@/components/contractsTextDetails';
import { useSearchParams } from 'next/navigation';
import WorkNum from './workNum';
const serviceOptions = [
  { value: 'examination', label: 'Examination Service' },
  { value: 'counseling', label: 'Counseling Service' },
  { value: 'diagnostic', label: 'Diagnostic Service' },
  { value: 'followup', label: 'Follow-up Service' },
];

function ContractInformation({ id }) {
  const pathname = usePathname();
  const { modal, editModal } = useModal();
  const searchparams = useSearchParams();
  const [selectedServices, setSelectedServices] = useState([
    'examination',
    'counseling',
    'diagnostic',
  ]);
  const [freelancerServiceData, setFreelancerServiceData] =
    useState({
      examination: {
        price: '54',
        duration: '54',
        discount: '5',
      },
      counseling: {
        price: '1',
        duration: '40',
        discount: '20',
      },
      diagnostic: {
        price: '80',
        duration: '77',
        discount: '70',
      },
    });
  const [memberServiceData, setMemberServiceData] =
    useState({
      examination: {
        price: '54',
        duration: '54',
        discount: '5',
      },
      counseling: {
        price: '1',
        duration: '40',
        discount: '20',
      },
      diagnostic: {
        price: '80',
        duration: '77',
        discount: '700',
      },
    });
  const handleServiceChange = (values) => {
    setSelectedServices(values);

    const updatedFreelancerData = {
      ...freelancerServiceData,
    };
    const updatedMemberData = { ...memberServiceData };

    values.forEach((service) => {
      if (!updatedFreelancerData[service]) {
        updatedFreelancerData[service] = {
          price: '',
          duration: '',
          discount: '',
        };
      }
      if (!updatedMemberData[service]) {
        updatedMemberData[service] = {
          price: '',
          duration: '',
          discount: '',
        };
      }
    });

    // Clean up services that were unselected
    Object.keys(updatedFreelancerData).forEach(
      (service) => {
        if (!values.includes(service)) {
          delete updatedFreelancerData[service];
        }
      }
    );
    Object.keys(updatedMemberData).forEach((service) => {
      if (!values.includes(service)) {
        delete updatedMemberData[service];
      }
    });

    setFreelancerServiceData(updatedFreelancerData);
    setMemberServiceData(updatedMemberData);
  };

  const handleServiceDataChange = (
    service,
    field,
    value,
    type
  ) => {
    if (type === 'freelancer') {
      setFreelancerServiceData((prevData) => ({
        ...prevData,
        [service]: {
          ...prevData[service],
          [field]: value,
        },
      }));
    } else if (type === 'member') {
      setMemberServiceData((prevData) => ({
        ...prevData,
        [service]: {
          ...prevData[service],
          [field]: value,
        },
      }));
    }
  };
  // console.log(selectedServices);
  // console.log(freelancerServiceData);
  const [EditText, setEditText] = useState(false);

  const [contractText, setContractText] = useState(`
    <div style="text-align: right;">
    <p >أنه في يوم ______ الموافق _____/______/2024</p>
    <p>تم الاتفاق بين كل من :</p>
    
    <h3>أولاً:</h3>
   <p>مركز سبيكترا الطبي التابع لشركة مستقبل الرعاية الطبية، المقيد بموجب الترخيص الصادر من وزارة التجارة برقم 1010697542 وعنوانه: الرياض، ظهرة لبن، شارع الفروسية، ويمثله في التوقيع على هذا العقد مديرة العمليات والتشغيل في مركز سبيكترا الطبي، ويشار إليه فيما بعد بالطرف الأول.</p>
    
    <h3>ثانيًا:</h3>
    <p>السيد/_______________ ويحمل رقم الهوية الوطنية/___________ (ويشار إليه فيما بعد بـ "الطرف الثاني").</p>
    
    <h3>تمهيد:</h3>
    <p>حيث أن الطرف الأول يمتلك _______ ويرغب في التعاقد مع الطرف الثاني على ___________، وحيث أبدى الطرف الثاني قبوله لهذا العقد ورغبته في التعاقد على ____________.</p>
    
    <p>فقد اتفق الطرفان وهما بكامل الأهلية القانونية للتعاقد والتصرف على الشروط والبنود الآتية:</p>
    
    <h3>البند الأول: موضوع العقد</h3>
    <p>موضوع هذا العقد هو قيام الطرف الثاني بـ __________ وفقاً للتعليمات والتوجيهات الصادرة من الطرف الأول.</p>
    
    <h3>البند الثاني: مدة العقد</h3>
    <p>مدة هذا العقد هي ________ تبدأ من تاريخ توقيع العقد ويمكن تجديدها بناءً على اتفاق الطرفين.</p>
    
    <h3>البند الثالث: المقابل المالي</h3>
    <p>يتقاضى الطرف الثاني مقابل عمله بموجب هذا العقد مبلغاً وقدره ________ يتم دفعه وفقاً للآلية التالية:</p>
    <ul>
      <li>دفعة أولى: ________ عند توقيع العقد.</li>
      <li>دفعة ثانية: ________ عند انتهاء نصف مدة العقد.</li>
      <li>دفعة ثالثة: ________ عند انتهاء العقد وتسليم الأعمال المطلوبة.</li>
    </ul>
    
    <h3>البند الرابع: التزامات الطرفين</h3>
    <ul>
      <li>يلتزم الطرف الأول بتقديم كافة المستندات والمعلومات المطلوبة للطرف الثاني.</li>
      <li>يلتزم الطرف الثاني بتنفيذ العمل وفقاً لما تم الاتفاق عليه ووفقاً للمواعيد المحددة.</li>
    </ul>
    
    <h3>البند الخامس: أحكام عامة</h3>
    <ul>
      <li>في حالة حدوث نزاع بين الطرفين يتم اللجوء إلى ________ لحله.</li>
      <li>هذا العقد مُلزم للطرفين ولا يجوز لأحد الطرفين التنازل عن أي حق أو التزام فيه إلا بموافقة الطرف الآخر.</li>
    </ul>

    <p>حرر هذا العقد من نسختين أصليتين، تسلم كل طرف نسخة للعمل بها وقت الحاجة.</p>
    </div>
  
  `);
  return (
    <div className='flex flex-col gap-7 w-full'>
      <Card className={'flex-1 w-full'}>
        <ServicesFreelancer
          selectedServices={selectedServices}
          serviceOptions={serviceOptions}
          serviceData={freelancerServiceData}
          handleServiceDataChange={handleServiceDataChange}
        />

        <ServicesMember
          selectedServices={selectedServices}
          serviceOptions={serviceOptions}
          serviceData={memberServiceData}
          handleServiceDataChange={handleServiceDataChange}
        />
        <WorkNum />
        <div className='flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]'>
          <Button
            onClick={() => {}}
            className={
              'text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white'
            }
          >
            <AcceptIcon />
            قبول
          </Button>
          <Button
            onClick={() => {
              editModal('type', 'contractsReq');
              editModal('open', true);
            }}
            className={
              'text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]'
            }
          >
            <RefuseIcon />
            رفض
          </Button>

          <Link
            href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERDETAILSEDIT(
              5,
              2
            )}
            className={
              '  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]'
            }
          >
            <EditIcon />
            تعديل
          </Link>
        </div>
      </Card>
      <Card>
        {EditText ? (
          <ContractsTextDetails
            contractText={contractText}
            setContractText={setContractText}
            setEditText={setEditText}
          />
        ) : (
          <div className='contractsDetails'>
            <div
              dangerouslySetInnerHTML={{
                __html: contractText,
              }}
            />
          </div>
        )}
        <div className='flex items-center flex-wrap my-14 gap-7'>
          <Button
            onClick={() => {}}
            className={
              'text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white'
            }
          >
            تجديد العقد
          </Button>
          <Button
            onClick={() => {}}
            className={
              'text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white'
            }
          >
            قبول
          </Button>
          <Button
            onClick={() => {
              editModal('type', 'contractsReq');
              editModal('open', true);
            }}
            className={
              'text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]'
            }
          >
            رفض
          </Button>
          <Button
            onClick={() => {
              editModal('type', 'contractsReq');
              editModal('open', true);
            }}
            className={
              'text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]'
            }
          >
            الغاء العقد
          </Button>
          <Link
            href={
              ROUTES.ADMIN.CONTRACTS.CONTRACTSUSER(id) +
              `?chat=true`
            }
            className={
              ' mdl:max-w-[260px]  !min-h-11  rounded-xl !py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5 font-bold   flex items-center bg-greenMain justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white mb-5 md:mb-0'
            }
          >
            <ContractsWhiteIcon />
            ارسال عقد
          </Link>
          <Button
            onClick={() => {
              setEditText(true);
            }}
            className={
              '  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]'
            }
          >
            <EditIcon />
            تعديل
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ContractInformation;
