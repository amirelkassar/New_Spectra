import React from "react";
import LayoutHome from "../components/layoutHome";
import ReportsNumber from "../components/reports-number";
import Report from "../components/report";
import imgDoctor from "@/assets/images/placeholder-person.png";
import imgPatient from "@/assets/images/placeholder-person.png";
import ReportsFiltration from "../components/reports-filtration";

function page() {
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
    },
    {
      id: 4,
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
  ];
  return (
    <LayoutHome>
      <div className="flex-1">
        <ReportsNumber title={"التقارير"}  />
        <div className="default-page w-full !h-auto">
          <ReportsFiltration />
          <div className="flex gap-6 flex-wrap mt-9 justify-center">
            {reports.map((report, i) => {
              return <Report key={i} data={report} />;
            })}
          </div>
        </div>
      </div>
    </LayoutHome>
  );
}

export default page;
