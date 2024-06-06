"use client";
import Input from "@/components/input";
import useOrg from "@/store/client/signup/org-slice";

const OrgInfo = () => {
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
      <Input
        value={org.orgCountry}
        setValue={org.setOrgCountry}
        label={"بلد المنظمة"}
        placeholder={"اختر بلد المنظمة"}
      />{" "}
      <Input
        value={org.orgCity}
        setValue={org.setOrgCity}
        label={" مدينة المنظمة"}
        placeholder={"اختر مدينة  المنظمة"}
      />
      <Input
        value={org.orgSpecialist}
        setValue={org.setOrgSpecialist}
        label={" مدينة المنظمة"}
        placeholder={"اختر مدينة المنظمة"}
      />{" "}
      <Input
        value={org.orgWebsite}
        setValue={org.setOrgWebsite}
        label={" الموقع الالكترونى للمنظمة"}
        placeholder={"الموقع الالكترونى للمنظمة"}
      />
    </>
  );
};

export default OrgInfo;
