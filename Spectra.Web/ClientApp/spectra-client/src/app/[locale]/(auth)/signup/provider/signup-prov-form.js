"use client";

import { useState } from "react";
import ProvInfo from "./prov-info";
import Button from "@/components/button";
import ManInfo from "./man-info";
import useProv from "@/store/auth/signup/prov-slice";

const SignupProvForm = () => {
  const [active, setActive] = useState(0);
  const prov = useProv();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ prov });
  };

  const handleNextPage = () => {
    setActive(1);
  };

  const handlePrevPage = () => {
    setActive(0);
  };
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {active === 0 ? (
        <>
          <ProvInfo />
          <Button
            onClick={handleNextPage}
            variant="secondary"
            className={"w-full font-bold"}
          >
            التالى
          </Button>
        </>
      ) : (
        <>
          <ManInfo />{" "}
          <div className="flex w-full gap-5">
            <Button
              className={"w-full font-bold"}
              variant="secondary"
              type="submit"
            >
              تسجيل الدخول
            </Button>
            <Button onClick={handlePrevPage} className={"w-full font-bold"}>
              السابق
            </Button>
          </div>
        </>
      )}
    </form>
  );
};

export default SignupProvForm;
