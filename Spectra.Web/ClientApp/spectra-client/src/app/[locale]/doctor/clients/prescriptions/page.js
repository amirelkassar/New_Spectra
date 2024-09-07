"use client";
import React, { useState } from "react";
import LayoutHome from "../components/layoutHome";
import PrescriptionCard from "../components/prescriptionCard";
import Card from "@/components/card";
import FilterIcon from "@/assets/icons/filter";

import { Radio, RadioGroup } from "@headlessui/react";
import MenuActions from "@/components/menu-actions";
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
const options = [
  { name: "الكل", value: "1" },
  { name: "عقاقير", value: "2" },
  { name: "توصيات", value: "3" },
];

function Page() {
  const [selected, setSelected] = useState(options[0].value);
  return (
    <LayoutHome>
      <div className="flex-1">
        <Card className="w-full ">
          <div className="flex items-center justify-between mb-16">
            <div className="flex  mb-1 flex-wrap items-center gap-4 md:gap-6">
              <h2 className="headTitleDash">الوصفات الطبية</h2>
            </div>
            <MenuActions />
          </div>
          <div className="flex items-center gap-4 lg:gap-10 flex-wrap">
            <div className="flex items-center gap-3">
              <FilterIcon />
              <p className="font-bold">فلتر بالنوع</p>
            </div>
            <RadioGroup
              value={selected}
              onChange={setSelected}
              className="flex items-center gap-3 lg:gap-7 h-auto flex-wrap gap-y-3"
            >
              {options.map((option) => (
                <Radio
                  key={option.value}
                  value={option.value}
                  className="px-5 h-10 cursor-pointer bg-transparent data-[checked]:bg-greenLight transition  min-w-fit xl:min-w-40 flex items-center justify-center font-bold rounded-xl gap-3 text-[12px] md:text-[16px] "
                >
                  {option.name}
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div className="flex gap-6 flex-wrap mt-9 justify-center">
            {reports.map((report) => {
              return (
                <PrescriptionCard key={report.id} data={report} type="all" />
              );
            })}
          </div>
        </Card>
      </div>
    </LayoutHome>
  );
}

export default Page;
