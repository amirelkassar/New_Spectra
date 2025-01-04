import React from "react";
import PrescriptionCard from "../../components/prescriptionCard";
import Card from "@/components/card";
const reports = [
  {
    id: 1,
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
    id: 3,
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
    id: 4,
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    nameFamily: "عبدالله الشيخ",
    patient: "الطفل / احمد عبدالله",
    therapy: ["سيترالين", "100 جم"],
    treatment_dates: "اخذه طوال الشهر  يوميا مع الاكل",
    pills: true,
  },
];
function page({params}) {
  return (
    <div className="flex-1">
      <Card className=" w-full ">
        <div className="flex gap-6 flex-wrap mt-9 justify-center">
          {reports.map((report) => {
            return (
              <PrescriptionCard idClient={params.clientId} key={report.id} data={report} type="one" />
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default page;
