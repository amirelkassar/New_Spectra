"use client";
import CheckIcon from "@/assets/icons/check";
import FamilyIcon from "@/assets/icons/family";
import OrgIcon from "@/assets/icons/org";
import ProviderIcon from "@/assets/icons/provider";
import Button from "@/components/button";
import ROUTES from "@/routes";
import { Radio, RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

import useMenu from "@/store/auth/signup/menu-store";
import CloseModalClient from "@/components/closeModalClient";
import FormFamily from "./form-family";
import FormOrg from "./form-org";
import FormProvider from "./form-prov";

function ModalSelect() {
  const signupOptions = [
    {
      icon: (
        <FamilyIcon className={"w-[44px] h-[50px] mdl:w-auto mdl:h-auto"} />
      ),
      type: "family",
      name: "عائلة طفل / مستفيد",
      route: ROUTES.AUTH.SIGNUP_FAMILY,
    },
    {
      icon: <OrgIcon className={"w-[44px] h-[50px] mdl:w-auto mdl:h-auto"} />,
      type: "organization",
      name: "منظمة / جهة داعمة",
      route: ROUTES.AUTH.SIGNUP_ORG,
    },
    {
      icon: (
        <ProviderIcon className={"w-[44px] h-[50px] mdl:w-auto mdl:h-auto"} />
      ),
      type: "provider",
      name: "مقدم الخدمة الطبية",
      route: ROUTES.AUTH.SIGNUP_PROVIDER,
    },
  ];

  const [selected, setSelected] = useState();
  const [IsOpen, setIsOpen] = useState(false);
  const { modal, editModal } = useMenu();
  const handlePrevPage = () => {
    setActive(0);
  };
  return (
    <div className="">
      <div className="flex items-center gap-1 mb-10">
        <h2 className="text-[14px] md:text-[20px] font-Bold">اضافة عميل</h2>
        {IsOpen && (
          <p className="text-[14px] md:text-[20px] font-Bold">
            {" "}
            - {selected.name}{" "}
          </p>
        )}
      </div>
      {!IsOpen ? (
        <div>
          <div className=" min-h-[40vh] md:min-h-[58vh] flex flex-col  justify-center my-14">
            <h3 className="text-[14px] md:text-[20px] font-Bold mb-9 ">
              نوع العميل
            </h3>
            <RadioGroup
              by="name"
              value={selected}
              onChange={setSelected}
              className="flex gap-5 mdl:gap-9 flex-wrap w-full items-center justify-center"
            >
              {signupOptions.map((option) => (
                <Radio
                  key={option.name}
                  value={option}
                  className=" flex-1 px-3 mdl:px-6 group w-[90px] mdl:w-[170px] h-[137px] mdl:h-[240px] relative flex flex-col gap-3 mdl:gap-9 items-center mdl:justify-center cursor-pointer rounded-lg shadow-md transition border border-transparent text-center pt-5 data-[checked]:border-greenMain"
                >
                  <div className=" flex items-center justify-center size-4 mdl:size-8 rounded-full bg-greenMain absolute -top-2 md:-top-4 left-1/2 -translate-x-1/2 transition opacity-0 group-data-[checked]:opacity-100">
                    <CheckIcon className={"size-3 mdl:size-4"} />
                  </div>
                  {option.icon}
                  <p className="text-sm mdl:text-xl font-bold">{option.name}</p>
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div className="flex items-center gap-4 md:gap-10 flex-col md:flex-row">
            <Button
              disabled={!!!selected}
              variant="secondary"
              className={"w-full font-bold disabled:cursor-not-allowed"}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              التالي
            </Button>
            <CloseModalClient />
          </div>
        </div>
      ) : (
        <div>{selected.type === "family" ? <FormFamily /> :selected.type === "organization" ? <FormOrg/> :selected.type === "provider"?<FormProvider/> : null}</div>
      )}
    </div>
  );
}

export default ModalSelect;
