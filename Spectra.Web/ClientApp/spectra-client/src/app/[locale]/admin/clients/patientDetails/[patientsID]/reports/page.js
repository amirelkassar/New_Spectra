import React from "react";
import Card from "@/components/card";
import Report from "../../_components/report";
import imgDoctor from '@/assets/images/placeholder-person.png'
import imgPatient from '@/assets/images/placeholder-person.png'
const reports = [
    {
      id: 1,
      state: "new",
      number: "2325",
      date: "20/2/2024",
      specialist: "احمد محمد كمال",
      typeReport: "تقرير تحليل صحي شامل",
      doctor: "احمد محمد كمال",
      specialistDoctor: "اخصائى نفسى",
      imgdoctor: imgDoctor,
      patient: "عبدالله الشيخ",
      specialistPatient: " الطفل / احمد",
      imgPatient: imgPatient,
    },
    {
      id: 2,
      state: "old",
      number: "2325",
      date: "20/2/2024",
      specialist: "احمد محمد كمال",
      typeReport: "تقرير تحليل صحي شامل",
      doctor: "احمد محمد كمال",
      specialistDoctor: "اخصائى نفسى",
      imgdoctor: imgDoctor,
      patient: "عبدالله الشيخ",
      specialistPatient: " الطفل / احمد",
      imgPatient: imgPatient,
    },
    {
      id: 3,
      state: "old",
      number: "2325",
      date: "20/2/2024",
      specialist: "احمد محمد كمال",
      typeReport: "تقرير تحليل صحي شامل",
      doctor: "احمد محمد كمال",
      specialistDoctor: "اخصائى نفسى",
      imgdoctor: imgDoctor,
      patient: "عبدالله الشيخ",
      specialistPatient: " الطفل / احمد",
      imgPatient: imgPatient,
    }
  ];
function page() {
  return (
    <Card>
      <div className="flex gap-6 flex-wrap mt-9">
        {
          reports.map((report,i)=>{
            return  <Report key={i} data={report} />
          })
        }
       
      </div>
    </Card>
  );
}

export default page;
