"use client";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";

import useProv from "@/store/auth/signup/prov-slice";
import PhoneInput from "react-phone-input-2";

const ProvInfo = () => {
  const cites = ["مدينة 1", " مدينة 2", "مدينة 3", "مدينة 4", "مدينة 5"];
  const countries = ["بلد 1", " بلد 2", "بلد 3", "بلد 4", "بلد 5"];

  const prov = useProv();
  return (
    <>
      <h1>  املأ بيانات مقدم الخدمة</h1>
      <Input
        value={prov.ProvName}
        setValue={prov.setProvName}
        label={"اسم المنظمة"}
        placeholder={"اسم المنظمة"}
      />
      <SelectBox
        options={["ولد", "بنت"]}
        selectedOption={prov.ProvGender}
        handleOnChange={(selected) =>
          prov.seProvGender(selected)
        }
        placeholder={" النوع"}
        label={"النوع"}
      />
      <SelectBox
        options={countries}
        selectedOption={prov.ProvCountry}
        setSelectedOption={prov.setProvCountry}
        placeholder="اختر بلد المنظمة"
        label={"بلد المنظمة"}
      />
      <SelectBox
        options={cites}
        selectedOption={prov.ProvCity}
        setSelectedOption={prov.setProvCity}
        placeholder="اختر  مدينة المنظمة"
        label={" مدينة المنظمة"}
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
            onChange={(phone) => prov.setPhone(`+${phone}`)}
          />
        </div>
      </div>
      <Input
        value={prov.ProvEmail}
        setValue={prov.setEmail}
        label={"البريد الالكترونى"}
        placeholder={"البريد الالكترونى"}
      />
       <Input
        value={prov.ProvNationalId}
        setValue={prov.setNationalId}
        label={"رقم الهوية"}
        placeholder={"اكتب رقم الهوية"}
      />
    </>
  );
};

export default ProvInfo;
