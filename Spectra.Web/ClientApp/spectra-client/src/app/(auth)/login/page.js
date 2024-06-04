import React from "react";
import LoginForm from "./login-form";
import Button from "@/components/button";
import GoogleIcon from "@/assets/icons/google";
import AppleIcon from "@/assets/icons/apple";
import Link from "next/link";
import ROUTES from "@/routes";

const LoginPage = () => {
  return (
    <div className="space-y-16 text-xl">
      <h1 className="text-black text-3xl ">أهلًا بعودتك</h1>
      <LoginForm />
      <div className="space-y-5">
        <Button dir="ltr" className={"w-full border-greenMain"}>
          <GoogleIcon />
          Sign in with Google
        </Button>
        <Button dir="ltr" className={"w-full border-greenMain"}>
          <AppleIcon />
          Sign in with Google
        </Button>
      </div>
      <div className="w-fit mx-auto ">
        <Link
          href={ROUTES.AUTH.REGISTER}
          className="block border border-transparent hover:border-greenMain ring-1 ring-transparent hover:ring-greenMain rounded-xl py-3 px-5   transition-all"
        >
          ليس لديك حساب؟ اشترك الان
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
