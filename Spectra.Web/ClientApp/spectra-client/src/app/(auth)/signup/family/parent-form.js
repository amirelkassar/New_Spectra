"use client";

import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import useFamily from "@/store/client/signup/family-slice";

const cites = ["مدينة 1", " مدينة 2", "مدينة 3", "مدينة 4", "مدينة 5"];
const countries = ["بلد 1", " بلد 2", "بلد 3", "بلد 4", "بلد 5"];

const ParentForm = () => {
  const family = useFamily();
  return (
    <>
      <h1>املأ البيانات التالية</h1>
      <Input
        value={family.parentName}
        setValue={family.setParentName}
        label={"اسم ولي الامر بالكامل"}
        placeholder={"اسم ولي الامر بالكامل"}
      />
      <SelectBox
        options={countries}
        selectedOption={family.country}
        setSelectedOption={family.setCountry}
        placeholder="اختر البلد"
        label={"البلد"}
      />
      <SelectBox
        options={cites}
        selectedOption={family.city}
        setSelectedOption={family.setCity}
        placeholder="اختر المدينة"
        label={"المدينة"}
      />
      <Input
        value={family.job}
        setValue={family.setJob}
        label={"الوظيفة"}
        placeholder={"اكتب الوظيفة"}
        isOptional
      />
      <Input
        value={family.nationalId}
        setValue={family.setNationalId}
        label={"رقم الهوية"}
        placeholder={"اكتب رقم الهوية"}
      />
    </>
  );
};

export default ParentForm;
