"use client";
import { useState } from "react";
import clsx from "clsx";
import Input from "./input";
import PasswordIcon from "@/assets/icons/password";

const PasswordInput = ({
  password,
  setPassword,
  passwordError,
  setPasswordError,
  containerClassName,
  inputClassName,
  label = "Password",
  labelClassName,
  inputContainerClassName,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const toggleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };
  return (
    <div className={clsx("relative", containerClassName)}>
      <Input
        type={hidePassword && "password"}
        label={label}
        placeholder={"ادخل كلمة السر"}
        value={password}
        setValue={setPassword}
        error={passwordError}
        setError={setPasswordError}
        inputClassName={"!pe-10" + " " + inputClassName}
        labelClassName={labelClassName}
        containerClassName={inputContainerClassName}
      />
      <button
        onClick={toggleHidePassword}
        type="button"
        className="absolute end-3 bottom-5"
      >
        <PasswordIcon hidePassword={hidePassword} />
      </button>
    </div>
  );
};

export default PasswordInput;
