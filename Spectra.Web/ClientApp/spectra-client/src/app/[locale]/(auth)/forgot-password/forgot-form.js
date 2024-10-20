"use client";

import CheckHeartIcon from "@/assets/icons/check-heart";
import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";

const ForgotForm = () => {
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    setActive(1);
  };

  const handleResSend = () => {
    setActive(2);
  };
  return (
    <>
      {active === 0 ? (
        <>
          <div>
            <h1 className="mb-5">إعادة تعيين كلمة المرور الخاصة بك</h1>
            <h2 className="text-base ">
              أدخل عنوان بريدك الإلكتروني أدناه وسنرسل لك رابطًا يحتوي على
              التعليمات{" "}
            </h2>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <Input
              label={"البريد الالكتروني"}
              placeholder={"ادخل بريدك الالكتروني"}
              value={email}
              setValue={setEmail}
            />
            <Button className={"w-full"} variant="secondary" type="submit">
              إرسال
            </Button>
          </form>
        </>
      ) : (
        (active === 1 || active === 2) && (
          <>
            <CheckHeartIcon />{" "}
            <div>
              <h1 className="mb-5">تم إرسال رابط إعادة التعيين</h1>
              <h2 className="text-base ">
                قم بفتح الرابط الذي وصل إلى بريدك الإلكتروني
              </h2>
            </div>
            {active === 2 ? (
              <p className="text-greenMain">تم إرسال الرابط مرة أخرى</p>
            ) : (
              <div>
                لم يصلك ؟ ..{" "}
                <button onClick={handleResSend} className="text-red">
                  إعادة الإرسال
                </button>
              </div>
            )}
          </>
        )
      )}
    </>
  );
};

export default ForgotForm;
