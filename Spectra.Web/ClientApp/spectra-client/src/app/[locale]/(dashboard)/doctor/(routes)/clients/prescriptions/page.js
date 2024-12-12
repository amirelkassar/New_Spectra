"use client";
import React  from "react";
import LayoutHome from "../components/layoutHome";
import Card from "@/components/card";
import { DataTable } from "@/components/data-table";
import { columns } from "../components/columns-prescriptions";
import PrescriptionsView from "../components/prescriptions-view";
import ActionMenu from "../components/ActionMenuPage";
const reports = [
  {
    id: 1,
    state: "new",
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    nameFamily: "عبدالله الشيخ",
    patient: "الطفل / احمد عبدالله",
    therapy: "سيترالين5",
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
    therapy: "سيترالين",
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
    therapy: "سيترالين",
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
    therapy: "سيترالين",
    treatment_dates: "اخذه طوال الشهر  يوميا مع الاكل",
    pills: true,
  },
  {
    id: 5,
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    nameFamily: "عبدالله الشيخ",
    patient: "الطفل / احمد عبدالله",
    therapy: "سيترالين",
    treatment_dates: "اخذه طوال الشهر  يوميا مع الاكل",
    pills: true,
  },
  {
    id: 6,
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    nameFamily: "عبدالله الشيخ",
    patient: "الطفل / احمد عبدالله",
    therapy: "سيترالين",
    treatment_dates: "اخذه طوال الشهر  يوميا مع الاكل",
    pills: true,
  },
];


function Page() {
  return (
    <LayoutHome>
      <div className="flex-1">
        <Card className="h-full ">
          <div className="flex items-center justify-between mb-16">
            <div className="flex  mb-1 flex-wrap items-center gap-4 md:gap-6">
              <h2 className="headTitleDash">الوصفات الطبية</h2>
            </div>
            <ActionMenu />
          </div>

          <DataTable haveComp Component={PrescriptionsView} data={reports} columns={columns} />
        </Card>
      </div>
    </LayoutHome>
  );
}

export default Page;
