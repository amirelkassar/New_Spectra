import Statue from '@/components/status';
import clsx from 'clsx';
import Image from 'next/image';
import placeholderImage from '@/assets/images/placeholder-person.png';
import MenuActions from '@/components/menu-actions';

const ClientAppointments = () => {
  const data = [
    {
      id: 0,
      image: placeholderImage,
      name: 'عبدالله الشيخ',
      specialisation: ' اخصائى نفسى',
      patientName: 'احمد محمد كمال',
      patientDiagnosis: 'انفصام',
      date: '25/4/2024',
      time: '10:00 pm',
      doctor: 'عبدالله الشيخ',
      statu: 'لم يبدأ بعد',
    },
    {
      id: 1,
      image: placeholderImage,
      name: 'عبدالله الشيخ',
      specialisation: ' اخصائى نفسى',
      patientName: 'احمد محمد كمال',
      patientDiagnosis: 'انفصام',
      date: '25/4/2024',
      time: '10:00 pm',
      doctor: 'عبدالله الشيخ',
      statu: 'لم يبدأ بعد',
    },
    {
      id: 2,
      image: placeholderImage,
      name: 'عبدالله الشيخ',
      specialisation: ' اخصائى نفسى',
      patientName: 'احمد محمد كمال',
      patientDiagnosis: 'انفصام',
      date: '25/4/2024',
      time: '10:00 pm',
      doctor: 'عبدالله الشيخ',
      statu: 'تتم الان',
    },
    {
      id: 4,
      image: placeholderImage,
      name: 'عبدالله الشيخ',
      specialisation: ' اخصائى نفسى',
      patientName: 'احمد محمد كمال',
      patientDiagnosis: 'انفصام',
      date: '25/4/2024',
      time: '10:00 pm',
      doctor: 'عبدالله الشيخ',
      statu: 'تمت',
    },
    {
      id: 5,
      image: placeholderImage,
      name: 'عبدالله الشيخ',
      specialisation: ' اخصائى نفسى',
      patientName: 'احمد محمد كمال',
      patientDiagnosis: 'انفصام',
      date: '25/4/2024',
      time: '10:00 pm',
      doctor: 'عبدالله الشيخ',
      statu: 'تمت',
    },
    {
      id: 6,
      image: placeholderImage,
      name: 'عبدالله الشيخ',
      specialisation: ' اخصائى نفسى',
      patientName: 'احمد محمد كمال',
      patientDiagnosis: 'انفصام',
      date: '25/4/2024',
      time: '10:00 pm',
      doctor: 'عبدالله الشيخ',
      statu: 'تمت',
    },
    {
      id: 7,
      image: placeholderImage,
      name: 'عبدالله الشيخ',
      specialisation: ' اخصائى نفسى',
      patientName: 'احمد محمد كمال',
      patientDiagnosis: 'انفصام',
      date: '25/4/2024',
      time: '10:00 pm',
      doctor: 'عبدالله الشيخ',
      statu: 'تمت',
    },
  ];
  return (
    <div className="rounded-xl bg-white p-8 grow">
      <h1 className="ms-5 mb-5">الـمواعيد</h1>
      <div className="max-h-[calc(100vh-300px)] overflow-auto grid grid-cols-[repeat(4,minmax(max-content,1fr))] gap-y-1 w-full ">
        <div className="contents ">
          <div className="bg-blueLight rounded-s-xl py-3 px-10 sticky top-0 text-xl">
            اسم الاخصائي
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 text-xl">
            الـميعاد
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 text-xl ">
            الحالة
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 rounded-e-xl text-xl me-5"></div>
        </div>
        {data.map((row, index) => (
          <div key={row.id} className="contents">
            <div
              className={clsx(
                'flex items-center gap-5 py-5 px-10',
                index !== data.length - 1 && 'border-b border-grayMedium'
              )}
            >
              <div className="size-14 rounded-[10px] bg-red flex items-start justify-center overflow-hidden">
                <Image src={row.image} alt="Doctor image" />
              </div>
              <div>
                <p className="">{row.name}</p>
                <p>{row.specialisation}</p>
              </div>
            </div>
            <div
              className={clsx(
                'py-5 px-10',
                index !== data.length - 1 && 'border-b border-grayMedium'
              )}
            >
              <p className="">{row.date}</p>
              <p>{row.time}</p>
            </div>{' '}
            <div
              className={clsx(
                'py-5 px-10 content-center',
                index !== data.length - 1 && 'border-b border-grayMedium'
              )}
            >
              <Statue statue={row.statu} />
            </div>
            <div
              className={clsx(
                'py-5 px-10   me-5  flex justify-end items-center',
                index !== data.length - 1 && 'border-b border-grayMedium'
              )}
            >
              <MenuActions />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientAppointments;
