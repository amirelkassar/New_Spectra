"use client";

import Input from "@/components/input";
import useOrg from "@/store/client/signup/org-slice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

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
        isOptional
      />
      <div className="space-y-2">
        <label htmlFor="phone" className="">
          رقم الهاتف
        </label>
        <div dir="ltr">
          <PhoneInput
            specialLabel=""
            enableSearch={true}
            country={"sa"}
            enableAreaCodes={true}
            autoFormat={false}
            inputProps={{
              type: "text",
              required: true,
              className: "default-field !ps-14 w-full",
              placeholder: "",
              id: "phone",
            }}
            onChange={(phone) => org.setManPhone(`+${phone}`)}
          />
        </div>
      </div>
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
