"use client";
import placeholderImage from "@/assets/images/placeholder-person.png";
import { columns } from "./_components/columns";
import { DataTable } from "@/components/data-table";
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
  {
    id: 8,
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
  {
    id: 9,
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
  {
    id: 10,
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
  {
    id: 11,
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
  {
    id: 12,
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
const FilterOptions = [
  {
    label: "الاستشارات",
    icon: null,
    key: "consultations",
  },
  {
    label: "الكشوفات",
    icon: null,
    key: "disclosures",
  },
  {
    label: "جلسات",
    icon: null,
    key: "sessions",
  },
];

const AppoTable = () => {
  return (
    <div className="rounded-xl bg-white  grow">
      <DataTable
       
        data={data}
        columns={columns}
        filterData={FilterOptions}
        filter="buttons"
        filterBy="type"
        filterText="فلتر بالنوع"
      />
    </div>
  );
};

export default AppoTable;
