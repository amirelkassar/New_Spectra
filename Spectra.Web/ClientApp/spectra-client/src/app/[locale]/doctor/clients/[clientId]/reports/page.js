import React from "react";
import imgDoctor from "@/assets/images/placeholder-person.png";
import imgPatient from "@/assets/images/placeholder-person.png";
import ReportsFiltration from "../../components/reports-filtration";
import Report from "../../components/report";
const reports = [
  {
    id: 1,
    state: "new",
    number: "2325",
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    typeReport: "Common question",
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
    typeReport: "post assessment ",
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
    typeReport: "Common question",
    doctor: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    imgdoctor: imgDoctor,
    patient: "عبدالله الشيخ",
    specialistPatient: " الطفل / احمد",
    imgPatient: imgPatient,
  },
  {
    id: 4,
    state: "old",
    number: "2325",
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    typeReport: "post assessment ",
    doctor: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    imgdoctor: imgDoctor,
    patient: "عبدالله الشيخ",
    specialistPatient: " الطفل / احمد",
    imgPatient: imgPatient,
  },
];
function page({params}) {
  return (
    <div className="flex-1">
      <div className="default-page w-full !h-auto">
        <ReportsFiltration />
        <div className="flex gap-7 lg:gap-10 flex-wrap mt-9 justify-center">
          {reports.map((report, i) => {
            return <Report idClient={params.clientId} key={i} data={report} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
