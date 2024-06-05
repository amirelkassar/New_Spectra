"use client";

import Input from "@/components/input";
import useOrg from "@/store/client/signup/org-slice";

const ManInfo = () => {
  const org = useOrg();
  return (
    <>
      <h1>املأ بيانات مسؤول الـمنظمة</h1>
      <Input
        value={org.manName}
        setValue={org.setManName}
        label={"الاسم بلكامل"}
        placeholder={"الاسم بلكامل"}
      />
      <Input
        value={org.manJob}
        setValue={org.setManJob}
        label={"المسمى الوظيفى"}
        placeholder={"المسمى الوظيفى"}
      />
      <Input
        value={org.manPhone}
        setValue={org.setManPhone}
        label={"رقم الهاتف"}
        placeholder={"رقم الهاتف"}
      />
      <Input
        value={org.manEmail}
        setValue={org.setManEmail}
        label={"البريد الالكترونى"}
        placeholder={"البريد الالكترونى"}
      />

    </>
  );
};

export default ManInfo;
