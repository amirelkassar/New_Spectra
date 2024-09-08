"use client";
import placeholderImage from "@/assets/images/placeholder-person.png";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columnsAppointments";
const data = [
  {
    id: 0,
    image: placeholderImage,
    name: "عبدالله الشيخ",
    specialisation: " اخصائى نفسى",
    patientName: "احمد محمد كمال",
    patientDiagnosis: "انفصام",
    date: "25/4/2024",
    numChild: "طفل واحد",
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
    numChild: "طفل واحد",
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
    numChild: "طفل واحد",
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
    numChild: "طفل واحد",
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
    numChild: "طفل واحد",
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
    numChild: "طفل واحد",
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
    numChild: "طفل واحد",
    time: "10:00 pm",
    doctor: "عبدالله الشيخ",
    statu: "تمت",
  },
];
const FilterOptions = [
  { label: "الاستشارات الفردية", icon: null, key: "1" },
  { label: "خدمة الكشف المبكر", icon: null, key: "2" },
  { label: "فريق التشخيص متعدد التخصصات", icon: null, key: "3" },
  { label: "الخدمات التدريبية والتاهيلية", icon: null, key: "4" },
];

const AppoTable = () => {
  return (
    <div className="rounded-xl bg-white p-0 md:p-8 grow">
      <DataTable
        data={data}
        columns={columns}
        filter="buttons"
        filterData={FilterOptions}
        filterBy="patientDiagnosis"
        filterText="فلتر بالنوع"
        IsWidth
      />
    </div>
  );
};

export default AppoTable;
