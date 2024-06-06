"use client";
import useOrg from "@/store/client/signup/org-slice";
import { useState } from "react";
import OrgInfo from "./org-info";
import Button from "@/components/button";
import ManInfo from "./man-info";

const SignupOrgForm = () => {
  const [active, setActive] = useState(0);
  const org = useOrg();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ org });
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
          <OrgInfo />
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

export default SignupOrgForm;
