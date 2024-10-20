"use client";

import Input from "@/components/input";
import useProv from "@/store/auth/signup/prov-slice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const ManInfo = () => {
  const prov = useProv();
  return (
    <>
      <h1>املأ بيانات مقدم الخدمة</h1>
      <Input
        value={prov.manName}
        setValue={prov.setManName}
        label={"الاسم بلكامل"}
        placeholder={"الاسم بلكامل"}
      />
      <Input
        value={prov.manJob}
        setValue={prov.setManJob}
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
            onChange={(phone) => prov.setManPhone(`+${phone}`)}
          />
        </div>
      </div>
      <Input
        value={prov.manEmail}
        setValue={prov.setManEmail}
        label={"البريد الالكترونى"}
        placeholder={"البريد الالكترونى"}
      />
    </>
  );
};

export default ManInfo;
