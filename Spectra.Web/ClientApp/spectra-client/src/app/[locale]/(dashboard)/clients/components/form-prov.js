"use client";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import ArrowLeft from "@/assets/icons/arrow-left";
import ArrowNav from "@/assets/icons/arrow-nav";
import ArrowRight from "@/assets/icons/arrow-right";
import Button from "@/components/button";
import CloseModalClient from "@/components/closeModalClient";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import useProv from "@/store/auth/signup/prov-slice";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function FormProvider() {
  const specialties = ["تخصص  1", " تخصص  2", "تخصص  3", "تخصص  4", "تخصص  5"];
  const cites = ["مدينة 1", " مدينة 2", "مدينة 3", "مدينة 4", "مدينة 5"];
  const countries = ["بلد 1", " بلد 2", "بلد 3", "بلد 4", "بلد 5"];

  const prov = useProv();
  const [active, setActive] = useState(0);
  return (
    <div>
      {active === 0 ? (
        <div>
          <form className="flex flex-col gap-5 mb-14">
            <Input
              value={prov.ProvName}
              setValue={prov.setProvName}
              label={"اسم المنظمة"}
            />
            <SelectBox
              options={["ولد", "بنت"]}
              selectedOption={prov.ProvGender}
              handleOnChange={(selected) => prov.seProvGender(selected)}
              label={"النوع"}
            />
            <SelectBox
              options={countries}
              selectedOption={prov.ProvCountry}
              setSelectedOption={prov.setProvCountry}
              label={"بلد المنظمة"}
            />
            <SelectBox
              options={cites}
              selectedOption={prov.ProvCity}
              setSelectedOption={prov.setProvCity}
              label={" مدينة المنظمة"}
            />
            <div className="space-y-2">
              <label htmlFor="phone2" className="">
                رقم الهاتف
              </label>
              <div dir="ltr">
                <PhoneInput
                  specialLabel=""
                  enableSearch={true}
                  country={"eg"}
                  enableAreaCodes={true}
                  autoFormat={false}
                  inputProps={{
                    type: "text",
                    required: true,
                    className: "default-field !ps-14 w-full",
                    placeholder: "",
                    id: "phone2",
                  }}
                  onChange={(phone) => prov.setPhone(`+${phone}`)}
                />
              </div>
            </div>
            <Input
              value={prov.ProvEmail}
              setValue={prov.setEmail}
              label={"البريد الالكترونى"}
            />
            <Input
              value={prov.ProvNationalId}
              setValue={prov.setNationalId}
              label={"رقم الهوية"}
            />
          </form>
          <div className="flex items-center gap-4 md:gap-10 flex-col md:flex-row">
            <Button
             onClick={() => {setActive(1)}}
              variant="secondary"
              className={
                "w-full font-bold disabled:cursor-not-allowed md:h-[60px]"
              }
            >
              التالى
            </Button>
            <CloseModalClient />
          </div>
        </div>
      ) : (
        <div>
          <form className="flex flex-col gap-5 mb-14">
            <SelectBox options={specialties} label={" مدينة المنظمة"} />
            <Input label={"رقم الترخيص / الاعتماد"} />
            <Input label={"مرخص / معتمد من "} />
            <Input label={"الدرجة العلمية"} />
            <div className="flex gap-4 items-end ">
              <Input label={"الشهادات "} containerClassName={"flex-1"} />
              <div className="h-[56px] flex items-center justify-center gap-4 px-5 py-3 rounded-[10px] bg-greenMain w-[132px]">
                <ArrowRight />
                <p className="text-white text-[16px] font-Bold">رفع ملف</p>
              </div>
            </div>
          </form>
          <div className="flex items-center gap-4 md:gap-10 flex-col md:flex-row">
            <Button
              variant="secondary"
              className={
                "w-full font-bold disabled:cursor-not-allowed md:h-[60px]"
              }
            >
              تأكيد
            </Button>
            <Button
              onClick={() => {setActive(0)}}
              className={"w-full font-bold  md:h-[60px]"}
            >
              السابق
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormProvider;
