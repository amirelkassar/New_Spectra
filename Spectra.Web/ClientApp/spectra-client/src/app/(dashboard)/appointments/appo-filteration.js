"use client";
import FilterIcon from "@/assets/icons/filter";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

const AppoFilteration = () => {

  const options = [
    { name: "الكل", value: "1" },
    { name: "الاستشارات", value: "2" },
    { name: "الكشوفات", value: "3" },
    { name: "جلسات", value: "4" },
  ];
  const [selected, setSelected] = useState(options[0].value);
console.log(selected);
  return (
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
  );
};

export default AppoFilteration;
