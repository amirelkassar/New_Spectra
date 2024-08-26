'use client'
import React from "react";

import { DataTable } from "@/components/data-table";
import {SpecialtiesColumns} from '../_components/specialties-columns'
import AddMainData from "../_components/add-drugs";
import ROUTES from "@/routes";
const specialtiesData = [
  {
    id: 0,
    specialty: "نفسية",
    code: 132,
    doctorsCount: 12,
  },
  {
    id: 1,
    specialty: "عصبية",
    code: 132,
    doctorsCount: 31,
  },
  {
    id: 2,
    specialty: "علاجية",
    code: 132,
    doctorsCount: 22,
  },
  {
    id: 3,
    specialty: "تغذية",
    code: 132,
    doctorsCount: 31,
  },
  {
    id: 4,
    specialty: "وظيفية",
    code: 132,
    doctorsCount: 4,
  },
  {
    id: 5,
    specialty: "نفسية",
    code: 132,
    doctorsCount: 5,
  },
  {
    id: 6,
    specialty: "عصبية",
    code: 132,
    doctorsCount: 8,
  },
];

function page() {
  return (
    <div>
      <div className="flex mb-10 flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">تخصصات الاطباء</h2>
        <AddMainData title={'أضافة تخصص'} path={ROUTES.ADMIN.DATAMAIN.DRUGSADD} />
      </div>

      <DataTable data={specialtiesData} columns={SpecialtiesColumns} />
    </div>
  );
}

export default page;