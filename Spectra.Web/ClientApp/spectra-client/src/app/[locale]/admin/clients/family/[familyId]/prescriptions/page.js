import React from "react";
import PrescriptionCard from "../../../components/prescriptionCard";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
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
function page({ params }) {
  return (
    <Card>
      <h2 className="text-base mb-7 lg:text-xl font-bold">الوصفات الطبية</h2>
      <div className="flex gap-6 flex-wrap mt-9 justify-center">
        {reports.map((report) => {
          return (
            <Link href={ROUTES.ADMIN.CLIENTS.FAMILY.PRESCRIPTIONSDETAILS(params.familyId,report.id)} key={report.id}>
              <PrescriptionCard  data={report} type="doc" />
            </Link>
          );
        })}
      </div>
    </Card>
  );
}

export default page;
