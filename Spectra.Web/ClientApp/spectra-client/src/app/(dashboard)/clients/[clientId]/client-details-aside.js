"use client";

import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

const ClientDetailsAside = () => {
  const options = [
    "بيانات المنظمة",
    "مواعيد اليوم",
    "مواعيد الكشف",
    "الوصفات الطبية",
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-56 shrink-0 bg-white rounded-xl pt-8">
      <RadioGroup
        value={selected}
        onChange={setSelected}
        className="flex flex-col items-center gap-7"
      >
        {options.map((option) => (
          <Radio
            key={option}
            value={option}
            className="cursor-pointer bg-transparent data-[checked]:bg-greenMain data-[checked]:text-white transition  w-40 py-2 flex items-center justify-center font-bold rounded-xl gap-3"
          >
            {option}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ClientDetailsAside;
