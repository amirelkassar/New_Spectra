"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import PasswordInput from "@/components/password-input";
import ROUTES from "@/routes";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ userName, password });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 ">
      <Input
        label={"اسم المستخدم"}
        placeholder={"ادخل اسمك بالكامل"}
        value={userName}
        setValue={setUserName}
        containerClassName="gap-3"
      />
      <PasswordInput
        label={"كلمة المرور"}
        password={password}
        setPassword={setPassword}
        inputContainerClassName="gap-3"
      />
      <div className="ms-auto  w-fit">
        <Link href={ROUTES.AUTH.FORGOT_PASSWORD}>نسيت كلمة السر؟</Link>
      </div>
      <Button variant="secondary" className={"w-full "} type="submit">
        التالي
      </Button>
    </form>
  );
};

export default LoginForm;
