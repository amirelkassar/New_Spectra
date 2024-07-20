"use client";

import CheckIcon from "@/assets/icons/check";
import FamilyIcon from "@/assets/icons/family";
import OrgIcon from "@/assets/icons/org";
import ProviderIcon from "@/assets/icons/provider";
import Button from "@/components/button";
import Modal from "@/components/modal";
import ROUTES from "@/routes";
import { Radio, RadioGroup } from "@headlessui/react";
import { useRouter } from "next/navigation";
import {  useState } from "react";

const signupOptions = [
  {
    icon: <FamilyIcon className={"w-[44px] h-[50px] mdl:w-auto mdl:h-auto"} />,
    name: "عائلة طفل",
    route: ROUTES.AUTH.SIGNUP_FAMILY,
  },
  {
    icon: <OrgIcon className={"w-[44px] h-[50px] mdl:w-auto mdl:h-auto"} />,
    name: "منظمة",
    route: ROUTES.AUTH.SIGNUP_ORG,
  },
  {
    icon: (
      <ProviderIcon className={"w-[44px] h-[50px] mdl:w-auto mdl:h-auto"} />
    ),
    name: "مقدم الخدمة الطبية",
    route: ROUTES.AUTH.SIGNUP_PROVIDER,
  },
];

const SignupModal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();
  
  const handleOpen = () => setIsOpen(true);
  const handleRouting = () => {
    router.push(selected.route);
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-fit mx-auto ">
        <button
          onClick={handleOpen}
          className=" border border-transparent hover:border-greenMain ring-1 ring-transparent hover:ring-greenMain rounded-xl py-3 px-5   transition-all"
        >
          ليس لديك حساب؟ اشترك الان
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        containerClassName={
          "container max-w-5xl bg-white rounded-3xl py-5 mdl:py-16 flex flex-col gap-8 mdl:gap-14 items-center"
        }
      >
        <h1 className="text-center">اهلا وسهلا , اختر نوع المستخدم</h1>
        <RadioGroup
          by="name"
          value={selected}
          onChange={setSelected}
          className="flex gap-5 mdl:gap-14 flex-wrap w-full items-center justify-center"
        >
          {signupOptions.map((option) => (
            <Radio
              key={option.name}
              value={option}
              className=" group w-full mdl:w-[241px] h-[137px] mdl:h-[310px] relative flex flex-col gap-3 mdl:gap-14 items-center mdl:justify-center cursor-pointer rounded-lg shadow-md transition border border-transparent text-center pt-5 data-[checked]:border-greenMain"
            >
              <div className=" flex items-center justify-center size-4 mdl:size-10 rounded-full bg-greenMain absolute -top-2 left-1/2 -translate-x-1/2 transition opacity-0 group-data-[checked]:opacity-100">
                <CheckIcon className={"size-2 mdl:size-6"} />
              </div>
              {option.icon}
              <p className="text-sm mdl:text-2xl font-bold">{option.name}</p>
            </Radio>
          ))}
        </RadioGroup>
        <Button
          disabled={!!!selected}
          variant="secondary"
          className={"w-full font-bold disabled:cursor-not-allowed"}
          onClick={handleRouting}
        >
          التالي
        </Button>
      </Modal>
    </>
  );
};

export default SignupModal;
