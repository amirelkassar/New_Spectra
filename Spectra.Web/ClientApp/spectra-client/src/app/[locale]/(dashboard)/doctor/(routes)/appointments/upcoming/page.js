"use client";
import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "../_components/columnsUpcoming";
import LinkAppointments from "../_components/linkAppointments";
const FilterOptions = [
  { label: "الاستشارات الفردية", icon: null, key: "1" },
  { label: "خدمة الكشف المبكر", icon: null, key: "2" },
  { label: "فريق التشخيص متعدد التخصصات", icon: null, key: "3" },
  { label: "الخدمات التدريبية والتاهيلية", icon: null, key: "4" },
];
const data = [
  {
    id: 0,
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
function AppointmentsDeferredPage() {

  return (
    <div className="default-page">
     <LinkAppointments/>
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
}

export default AppointmentsDeferredPage;
