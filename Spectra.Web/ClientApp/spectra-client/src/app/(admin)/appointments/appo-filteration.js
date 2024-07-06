"use client";
import FilterIcon from "@/assets/icons/filter";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

const AppoFilteration = () => {
  const options = [
    "الاستشارات الفردية",
    "خدمة الكشف المبكر",
    "فريق التشخيص متعدد التخصصات",
    "الخدمات التدريبية والتاهيلية",
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-3">
        <FilterIcon />
        <p className="font-bold">فلتر بالنوع</p>
      </div>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        className="flex items-center gap-7 h-10"
      >
        {options.map((option) => (
          <Radio
            key={option}
            value={option}
            className="px-5 cursor-pointer bg-transparent data-[checked]:bg-greenLight transition h-full min-w-40 flex items-center justify-center font-bold rounded-xl gap-3"
          >
            {option}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default AppoFilteration;
