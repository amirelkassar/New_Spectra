"use client";
import Button from "@/components/button";
import PasswordInput from "@/components/password-input";
import { useState } from "react";

const ResetPasswordPage = ({ params }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = params;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ token, password, confirmPassword });
  };
  return (
    <div className="space-y-16 text-xl">
      <h1>اعادة تعيين كلمة المرور الخاصة بك</h1>
      <form onSubmit={onSubmit} className="space-y-5">
        <PasswordInput
          password={password}
          setPassword={setPassword}
          label="كلمة المرور الجديدة"
        />{" "}
        <PasswordInput
          password={confirmPassword}
          setPassword={setConfirmPassword}
          label="تأكيد كلمة المرور الجديدة"
        />
        <Button variant="secondary" className={"w-full"} type="submit">
          تأكيد
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
