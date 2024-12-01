"use client";
import ArrowLeft from "@/assets/icons/arrow-left";
import placeholderImage from "@/assets/images/placeholder-person.png";
import ROUTES from "@/routes";
import { Link } from "@/navigation";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";

const data = [
  {
    id: 0,
    image: placeholderImage,
    type: "consultations",
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
    type: "disclosures",
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
    type: "sessions",
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
    type: "disclosures",
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
    type: "consultations",
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
    type: "disclosures",
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
    type: "sessions",
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

const LastAppointments = () => {

  return (
    <div className="rounded-xl bg-white p-0 md:p-8 grow">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-[18px]">
        <h1 className="text-[16px] font-bold md:text-[20px]">اخر المواعيد</h1>
        <Link
          href={ROUTES.ADMIN.APPOINTMENTS}
          className="showMore flex justify-center items-center gap-3 md:gap-[30px] h-[40px] md:h-[48px] w-[140px] md:w-[210px] rounded-[10px] px-[12px]"
        >
          <p className="text-[14px] md:text-[20px]">عرض الكل</p>
          <ArrowLeft />
        </Link>
      </div>  
      <DataTable  data={data} columns={columns} />
    </div>
  );
};

export default LastAppointments;
