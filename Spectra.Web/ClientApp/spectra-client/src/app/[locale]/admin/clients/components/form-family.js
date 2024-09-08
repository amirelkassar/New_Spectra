"use client";
import Button from "@/components/button";
import CloseModalClient from "@/components/closeModalClient";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import useFamily from "@/store/auth/signup/family-slice";
import React, { useState } from "react";

const cites = ["مدينة 1", " مدينة 2", "مدينة 3", "مدينة 4", "مدينة 5"];
const countries = ["بلد 1", " بلد 2", "بلد 3", "بلد 4", "بلد 5"];
function FormFamily() {
  const family = useFamily();
  const [error, setErrors] = useState({
    parentName: "",
    country: "",
    city: "",
    job: "",
    nationalId: "",
  });
  return (
    <div>
      <form className="flex flex-col gap-5 mb-14">
        <Input labelClassName={'text-[12px] md:text-[16px]'}
          value={family.parentName}
          setValue={family.setParentName}
          label={"اسم ولي الامر بالكامل"}
          error={error.parentName}
        />
        <SelectBox
          options={countries}
          selectedOption={family.country}
          setSelectedOption={family.setCountry}
          label={"البلد"}
          error={error.country}
          labelClassName={'text-[12px] md:text-[16px]'}
        />
        <SelectBox
          options={cites}
          selectedOption={family.city}
          setSelectedOption={family.setCity}
          label={"المدينة"}
          error={error.city}
          labelClassName={'text-[12px] md:text-[16px]'}
        />
        <Input labelClassName={'text-[12px] md:text-[16px]'}
          value={family.job}
          setValue={family.setJob}
          label={"الوظيفة"}
          isOptional
          error={error.job}
        />
        <Input labelClassName={'text-[12px] md:text-[16px]'}
          value={family.nationalId}
          setValue={family.setNationalId}
          label={"رقم الهوية"}
          error={error.nationalId}
        />
        <Input labelClassName={'text-[12px] md:text-[16px]'} label={"البريد الالكترونى"} />
      </form>
      <div className="flex items-center gap-4 md:gap-10 flex-col md:flex-row">
        <Button
          variant="secondary"
          className={"w-full font-bold disabled:cursor-not-allowed md:h-[60px]"}
        >
          تأكيد
        </Button>
        <CloseModalClient />
      </div>
    </div>
  );
}

export default FormFamily;
