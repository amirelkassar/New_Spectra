import React from "react";
import PrescriptionCard from "../_components/prescriptionCard";
import Card from "@/components/card";
const reports = [
    {
      id: 1,
      state: "new",
      date: "20/2/2024",
      specialist: "احمد محمد كمال",
      specialistDoctor: "اخصائى نفسى",
      nameFamily: "عبدالله الشيخ",
      patient: "الطفل / احمد عبدالله",
      therapy: ["سيترالين", "100 جم"],
      treatment_dates: "اخذه طوال الشهر  يوميا مع الاكل",
      pills: true,
    },
    {
      id: 2,
      state: "old",
      date: "20/2/2024",
      specialist: "احمد محمد كمال",
      specialistDoctor: "اخصائى نفسى",
      nameFamily: "عبدالله الشيخ",
      patient: "الطفل / احمد عبدالله",
      therapy: ["علاج تربوى"],
      pills: false,
    },
    {
      id: 3,
      state: "old",
      date: "20/2/2024",
      specialist: "احمد محمد كمال",
      specialistDoctor: "اخصائى نفسى",
      nameFamily: "عبدالله الشيخ",
      patient: "الطفل / احمد عبدالله",
      therapy: ["علاج تربوى"],
      pills: false,
    },
    {
      id: 4,
      state: "old",
      date: "20/2/2024",
      specialist: "احمد محمد كمال",
      specialistDoctor: "اخصائى نفسى",
      nameFamily: "عبدالله الشيخ",
      patient: "الطفل / احمد عبدالله",
      therapy: ["علاج تربوى"],
      pills: false,
    },
  ];
function page() {
  return (
    <Card>
      <div className="flex gap-6 flex-wrap mt-9 justify-center">
        {reports.map((report) => {
          return <PrescriptionCard key={report.id} data={report} type="doc" />;
        })}
      </div>
    </Card>
  );
}

export default page;
