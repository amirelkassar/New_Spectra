"use client";
import Button from "@/components/button";
import CloseModalClient from "@/components/closeModalClient";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import useOrg from "@/store/auth/signup/org-slice";
import React from "react";

function FormOrg() {
  const cites = ["مدينة 1", " مدينة 2", "مدينة 3", "مدينة 4", "مدينة 5"];
  const countries = ["بلد 1", " بلد 2", "بلد 3", "بلد 4", "بلد 5"];
  const org = useOrg();
  return (
    <div>
      <form className="flex flex-col gap-5 mb-14">
        <Input
          value={org.orgName}
          setValue={org.setOrgName}
          label={"اسم المنظمة"}
        />
        <Input
          value={org.orgAddress}
          setValue={org.setOrgAddress}
          label={"عنوان المنظمة"}
        />
        <SelectBox
          options={countries}
          selectedOption={org.orgCountry}
          setSelectedOption={org.setOrgCountry}
          label={"بلد المنظمة"}
        />
        <SelectBox
          options={cites}
          selectedOption={org.orgCity}
          setSelectedOption={org.setOrgCity}
          label={" مدينة المنظمة"}
        />
        <Input
          value={org.orgSpecialist}
          setValue={org.setOrgSpecialist}
          label={" تخصص المنظمة"}
        />{" "}
        <Input
          value={org.orgSpecialist}
          setValue={org.setOrgSpecialist}
          label={"نوع المنظمة"}
        />{" "}
        <Input
          value={org.orgWebsite}
          setValue={org.setOrgWebsite}
          label={" الموقع الالكترونى للمنظمة"}
          
        />
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

export default FormOrg;
