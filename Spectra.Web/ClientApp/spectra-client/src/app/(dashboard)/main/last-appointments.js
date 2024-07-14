import ArrowLeft from "@/assets/icons/arrow-left";
import placeholderImage from "@/assets/images/placeholder-person.png";
import MenuActions from "@/components/menu-actions";
import Statue from "@/components/status";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/routes";
const LastAppointments = () => {
  
  const data = [
    {
      id: 0,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "لم يبدأ بعد",
    },
    {
      id: 1,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "لم يبدأ بعد",
    },
    {
      id: 2,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تتم الان",
    },
    {
      id: 4,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 5,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 6,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 7,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
  ];
  return (
    <div className="rounded-xl bg-white p-0 md:p-8 grow">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-[18px]">
        <h1 className="text-[16px] font-bold md:text-[20px]">اخر المواعيد</h1>
        <Link href={ROUTES.ADMIN.APPOINTMENTS}  className="showMore flex justify-center items-center gap-3 md:gap-[30px] h-[40px] md:h-[48px] w-[140px] md:w-[210px] rounded-[10px] px-[12px]">
          <p className="text-[14px] md:text-[20px]">عرض الكل</p>
          <ArrowLeft />
        </Link>
      </div>
      <div className=" max-h-[100vh] md:h-[calc(100vh-480px)] min-h-[600px] overflow-auto grid grid-cols-[repeat(3,minmax(108px,1fr))] md:grid-cols-[repeat(4,minmax(max-content,1fr))] gap-y-1 w-full ">
        <div className="contents bg-[#F1FCFF] ">
          <div className="bg-blueLight  h-[40px] md:h-[48px] rounded-s-xl py-[8px] px-[14px] md:px-[20px] sticky top-0 text-[12px] md:text-[20px]">
            اسم الطبيب
          </div>
          <div className="bg-blueLight  h-[40px] md:h-[48px] py-[8px] px-[14px] md:px-[20px] sticky top-0 text-[12px] md:text-[20px]">
            اسم المريض{" "}
          </div>
          <div className="bg-blueLight  h-[40px] md:h-[48px]  py-[8px] px-[14px] md:px-[20px] hidden md:block md:sticky top-0 text-[12px] md:text-[20px]">
            الـميعاد
          </div>
          <div className="bg-blueLight  h-[40px] md:h-[48px] py-[8px] px-[14px] md:px-[20px] sticky top-0 rounded-e-xl text-[12px] md:text-[20px] me-0 md:me-5">
            الحالة
          </div>
        </div>
        {data.map((row, index) => (
          <div key={row.id} className="contents">
            <div
              className={clsx(
                "flex items-center gap-5 py-2 md:py-5 px-3 md:px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <div className=" size-14 rounded-full bg-red hidden md:flex items-start justify-center overflow-hidden">
                <Image src={row.image} alt="Doctor image" />
              </div>
              <div>
                <p className="font-bold text-[12px] md:text-[16px]">
                  {row.name}
                </p>
                <p className="text-[12px] md:text-[16px]">
                  {row.specialisation}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "py-2 md:py-5 px-3 md:px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <p className="font-bold text-[12px] md:text-[16px]">
                {row.patientName}
              </p>
              <p className="text-[12px] md:text-[16px]">
                {row.patientDiagnosis}
              </p>
            </div>
            <div
              className={clsx(
                "py-2 md:py-5 px-3 md:px-10 hidden md:block border-b  border-grayMedium ",
                index !== data.length - 1 && " "
              )}
            >
              <p className="font-bold text-[12px] md:text-[16px]">{row.date}</p>
              <p className="text-[12px] md:text-[16px]">{row.time}</p>
            </div>
            <div
              className={clsx(
                "flex gap-[10px] md:gap-[40px] py-2 md:py-5 px-3 md:px-10 content-center items-start ",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <Statue statue={row.statu} />
              <MenuActions />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastAppointments;
