"use client";

import Button from "@/components/button";
import ParentForm from "./parent-form";
import { useState } from "react";
import ChildForm from "./child-form";
import useFamily from "@/store/auth/signup/family-slice";
import ROUTES from "@/routes";
import { useRouter } from "next/navigation";
const FamilyForm = () => {
  const { addChild } = useFamily();
  const [active, setActive] = useState(0);
  const [activeChildIndex, setActiveChildIndex] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();
  const handleNextPage = () => {
    setActive((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setActive((prev) => prev - 1);
  };

  const handleAddChild = () => {
    addChild();
    setActiveChildIndex((prev) => prev + 1);
    setIsConfirmed(false);
  };

  const handleRouting = () => {
    router.push(ROUTES.AUTH.LOGIN);
  };
  return (
    <form className="space-y-5">
      {active === 0 && (
        <>
          <ParentForm />
          <Button
            onClick={handleNextPage}
            variant="secondary"
            className={"w-full font-bold"}
          >
            التالي
          </Button>
        </>
      )}
      {active === 1 && (
        <>
          {isConfirmed ? (
            <>
              <div>
                <h1>تم اضافة الطفل بنجاح</h1>
                <p>لقد تم اضافة جميع البيانات الخاصة بالطفل بنجاح</p>
              </div>

              <Button variant="secondary" className={"w-full"}>
                تسجيل الدخول
              </Button>
              <Button onClick={handleAddChild} className={"w-full"}>
                إضافة طفل آخر
              </Button>
            </>
          ) : (
            <>
              <ChildForm index={activeChildIndex} />
              <div className="grid grid-cols-2 gap-5">
                <Button
                  onClick={() => setIsConfirmed(true)}
                  variant="secondary"
                  className={"w-full"}
                >
                  تأكيد
                </Button>
                <Button onClick={handlePrevPage} className={"w-full"}>
                  السابق
                </Button>
                <Button className={"col-span-2"} onClick={handleRouting}>
                  ليس الآن / تسجيل الدخول
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </form>
  );
};

export default FamilyForm;
