import React from "react";
import LoginForm from "./login-form";
import Button from "@/components/button";
import GoogleIcon from "@/assets/icons/google";
import AppleIcon from "@/assets/icons/apple";
import Link from "next/link";
import ROUTES from "@/routes";
import SignupModal from "./signup-modal";

const LoginPage = () => {
  return (
    <div className="space-y-16 text-xl">
      <h1 className=" ">أهلًا بعودتك</h1>
      <LoginForm />
      <div className="space-y-5">
        <Button dir="ltr" className={"w-full border-greenMain"}>
          <GoogleIcon />
          Sign in with Google
        </Button>
        <Button dir="ltr" className={"w-full border-greenMain"}>
          <AppleIcon />
          Sign in with Apple
        </Button>
      </div>
      <SignupModal />
    </div>
  );
};

export default LoginPage;
