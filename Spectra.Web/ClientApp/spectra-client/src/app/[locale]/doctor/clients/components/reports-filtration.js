"use client";
import FamilyIcon from "@/assets/icons/family";
import FilterIcon from "@/assets/icons/filter";
import OrgIcon from "@/assets/icons/org";
import ProviderIcon from "@/assets/icons/provider";
import Separetor from "@/components/separator";
import { Radio, RadioGroup } from "@headlessui/react";
import { Fragment, useState } from "react";

const ReportsFiltration = () => {
  const options = [
    {
      name: "الكل",
    },
    {
      icon: <Separetor vertical className={"shrink-0  h-[20px] lg:h-[20px]"} />,
    },
    {
      name: "التقارير التشخيصية",
    },
    {
      icon: <Separetor vertical className={"shrink-0  h-[20px] lg:h-[20px]"} />,
    },
    {
      name: "التقارير العلاجية",
    },
    {
      icon: <Separetor vertical className={"shrink-0  h-[20px] lg:h-[20px]"} />,
    },
    {
      name: "التقارير السلوكية",
    },
   
  ];

  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-10 items-start">
      <div className="flex items-center gap-3">
        <FilterIcon />
        <p className="font-bold text-[12px] lg:text-[16px]">فلتر بالنوع</p>
      </div>

      <RadioGroup
        by="name"
        value={selected}
        onChange={setSelected}
        className="flex items-center gap-1 md:gap-5  flex-wrap"
      >
        {options.map((option, index) => (
          <Fragment key={index}>
            {option.name ? (
              <Radio
                value={option}
                className=" text-[14px] h-[32px] lg:h-[42px]  md:text-[16px] py-2 px-2 lg:px-3 cursor-pointer bg-transparent data-[checked]:bg-blueLight transition  lg:min-w-32 flex items-center justify-center  rounded-xl gap-1 lg:gap-3"
              >
                {option.icon}
                {option.name}
              </Radio>
            ) : (
              <>{option.icon}</>
            )}
          </Fragment>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ReportsFiltration;
