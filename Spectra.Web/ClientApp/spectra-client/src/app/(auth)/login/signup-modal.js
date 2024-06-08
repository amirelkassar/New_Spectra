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
import { useEffect, useState } from "react";

const signupOptions = [
  {
    icon: <FamilyIcon />,
    name: "عائلة طفل",
    route: ROUTES.AUTH.SIGNUP_FAMILY,
  },
  {
    icon: <OrgIcon />,
    name: "منظمة",
    route: ROUTES.AUTH.SIGNUP_ORG,
  },
  {
    icon: <ProviderIcon />,
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
          "container max-w-5xl bg-white rounded-3xl py-16 flex flex-col gap-14 items-center"
        }
      >
        <h1>اهلا وسهلا , اختر نوع المستخدم</h1>
        <RadioGroup
          by="name"
          value={selected}
          onChange={setSelected}
          className="flex gap-14"
        >
          {signupOptions.map((option) => (
            <Radio
              key={option.name}
              value={option}
              className=" group w-[241px] h-[310px] relative flex flex-col gap-14 items-center justify-center cursor-pointer rounded-lg shadow-md transition border border-transparent  data-[checked]:border-greenMain"
            >
              <div className=" flex items-center justify-center size-10 rounded-full bg-greenMain absolute -top-5 left-1/2 -translate-x-1/2 transition opacity-0 group-data-[checked]:opacity-100">
                <CheckIcon />
              </div>
              {option.icon}
              <p className="text-2xl font-bold">{option.name}</p>
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
