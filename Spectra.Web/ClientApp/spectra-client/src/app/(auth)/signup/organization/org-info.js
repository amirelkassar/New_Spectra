"use client";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import useOrg from "@/store/client/signup/org-slice";

const OrgInfo = () => {
  const cites = ["مدينة 1", " مدينة 2", "مدينة 3", "مدينة 4", "مدينة 5"];
  const countries = ["بلد 1", " بلد 2", "بلد 3", "بلد 4", "بلد 5"];

  const org = useOrg();
  return (
    <>
      <h1>املأ بيانات المنظمة</h1>
      <Input
        value={org.orgName}
        setValue={org.setOrgName}
        label={"اسم المنظمة"}
        placeholder={"اسم المنظمة"}
      />
      <Input
        value={org.orgAddress}
        setValue={org.setOrgAddress}
        label={"عنوان المنظمة"}
        placeholder={"عنوان المنظمة"}
      />
      <SelectBox
        options={countries}
        selectedOption={org.orgCountry}
        setSelectedOption={org.setOrgCountry}
        placeholder="اختر بلد المنظمة"
        label={"بلد المنظمة"}
      />
      <SelectBox
        options={cites}
        selectedOption={org.orgCity}
        setSelectedOption={org.setOrgCity}
        placeholder="اختر  مدينة المنظمة"
        label={" مدينة المنظمة"}
      />
      <Input
        value={org.orgSpecialist}
        setValue={org.setOrgSpecialist}
        label={" تخصص المنظمة"}
        placeholder={"تخصص المنظمة"}
      />{" "}
      <Input
        value={org.orgWebsite}
        setValue={org.setOrgWebsite}
        label={" الموقع الالكترونى للمنظمة"}
        placeholder={"الموقع الالكترونى للمنظمة"}
        isOptional
      />
    </>
  );
};

export default OrgInfo;
