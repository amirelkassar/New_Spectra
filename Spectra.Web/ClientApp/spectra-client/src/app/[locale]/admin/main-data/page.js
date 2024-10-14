"use client";
import React from "react";
import { DataTable } from "@/components/data-table";
import imgDrugs from "@/assets/images/drugs.png";
import { DrugsColumns } from "./_components/drugs-columns";
import AddMainData from "./_components/add-drugs";
import ROUTES from "@/routes";
import { GetDrugs } from "@/useAPI/admin/drugs/page";
const dataDru = [
  {
    id: 0,
    code: "#12548",
    name: "سيترالين",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 1,
    code: "#12548",
    name: "Lagerivlo",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 2,
    code: "#12548",
    name: "سيبرام",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 3,
    code: "#12548",
    name: "Avinew",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 4,
    code: "#12548",
    name: "Varivax",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 5,
    code: "#12548",
    name: "L-citrulline",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 6,
    code: "#12548",
    name: "سيبرام",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
];

function page() {
  const { data } = GetDrugs();
  console.log(data);
  
  return (
    <div>
      <div className="flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">وصفات طبية</h2>
        <AddMainData
          title={"أضافة عقار"}
          path={ROUTES.ADMIN.DATAMAIN.DRUGSADD}
        />
      </div>

      <DataTable data={dataDru} columns={DrugsColumns} />
    </div>
  );
}

export default page;
