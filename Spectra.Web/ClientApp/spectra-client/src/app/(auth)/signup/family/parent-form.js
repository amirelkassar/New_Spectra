"use client";

import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import useFamily from "@/store/auth/signup/family-slice";
import { useState } from "react";

const cites = ["مدينة 1", " مدينة 2", "مدينة 3", "مدينة 4", "مدينة 5"];
const countries = ["بلد 1", " بلد 2", "بلد 3", "بلد 4", "بلد 5"];

const ParentForm = () => {
  const family = useFamily();
  const [error,setErrors]=useState({
    parentName:"nammmmmmmmmmmmde",
    country:"",
    city:"",
    job:"",
    nationalId:"",
  })
  console.log(family);
  return (
    <>
      <h1>املأ البيانات التالية</h1>
      <Input
        value={family.parentName}
        setValue={family.setParentName}
        label={"اسم ولي الامر بالكامل"}
        placeholder={"اسم ولي الامر بالكامل"}
        error={error.parentName}
      />
      <SelectBox
        options={countries}
        selectedOption={family.country}
        setSelectedOption={family.setCountry}
        placeholder="اختر البلد"
        label={"البلد"}
        error={error.country}

      />
      <SelectBox
        options={cites}
        selectedOption={family.city}
        setSelectedOption={family.setCity}
        placeholder="اختر المدينة"
        label={"المدينة"}
        error={error.city}

      />
      <Input
        value={family.job}
        setValue={family.setJob}
        label={"الوظيفة"}
        placeholder={"اكتب الوظيفة"}
        isOptional
        error={error.job}

      />
      <Input
        value={family.nationalId}
        setValue={family.setNationalId}
        label={"رقم الهوية"}
        placeholder={"اكتب رقم الهوية"}
        error={error.nationalId}

      />
    </>
  );
};

export default ParentForm;
