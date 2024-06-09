"use client";
import FamilyIcon from "@/assets/icons/family";
import FilterIcon from "@/assets/icons/filter";
import OrgIcon from "@/assets/icons/org";
import ProviderIcon from "@/assets/icons/provider";
import Separetor from "@/components/separator";
import { Radio, RadioGroup } from "@headlessui/react";
import { Fragment, useState } from "react";

const Filteration = () => {
  const options = [
    {
      name: "الكل",
    },
    {
      icon: <Separetor vertical className={"shrink-0 h-2/3"} />,
    },
    {
      name: "عائلة طفل",
      icon: <FamilyIcon className={"w-[18px] h-[19px]"} />,
    },
    {
      icon: <Separetor vertical className={"shrink-0 h-2/3"} />,
    },
    {
      name: "منظمة",
      icon: <OrgIcon className={"size-4"} />,
    },
    {
      icon: <Separetor vertical className={"shrink-0 h-2/3"} />,
    },
    {
      name: "مقدم الخدمة الطبية",
      icon: <ProviderIcon className={"w-[18px] h-[19px]"} />,
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-3">
        <FilterIcon />
        <p className="font-bold">فلتر بالنوع</p>
      </div>

      <RadioGroup
        by="name"
        value={selected}
        onChange={setSelected}
        className="flex items-center gap-7 h-10"
      >
        {options.map((option, index) => (
          <Fragment key={index}>
            {option.name ? (
              <Radio
                value={option}
                className="px-5 cursor-pointer bg-transparent data-[checked]:bg-greenLight transition h-full min-w-40 flex items-center justify-center font-bold rounded-xl gap-3"
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

export default Filteration;
