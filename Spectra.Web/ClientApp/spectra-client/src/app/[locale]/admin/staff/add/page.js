"use client";
import BackIcon from "@/assets/icons/back";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React, { useState } from "react";
import FormOne from "./_components/formOne";
import FormDocSpe from "./_components/formDocSpe";
import FormStaff from "./_components/formStaff";
import FormCreateEmail from "./_components/formCreateEmail";

function Page() {
  const [firstData, setFirstData] = useState("");
  const [DocSpeData, setDocSpeData] = useState("");
  const [StaffData, setStaffData] = useState("");
  const [PageForm, setPageForm] = useState(1);
  console.log(firstData);

  return (
    <Card>
      <div className="flex mb-10   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.STAFF.DASHBOARD}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة موظف</h2>
      </div>

      {PageForm === 1 ? (
        <FormOne
          firstData={firstData}
          setFirstData={setFirstData}
          setPageForm={setPageForm}
        />
      ) : PageForm === 2 ? (
        firstData.profession === "دكتور" || firstData.profession === "متخصص" ? (
          <FormDocSpe
            setPageForm={setPageForm}
            setDocSpeData={setDocSpeData}
            DocSpeData={DocSpeData}
          />
        ) : (
          <FormStaff
            setPageForm={setPageForm}
            setStaffData={setStaffData}
            StaffData={StaffData}
          />
        )
      ) : PageForm === 3 ? (
        <FormCreateEmail
          firstData={firstData}
          setFirstData={setFirstData}
          setPageForm={setPageForm}
        />
      ) : null}
    </Card>
  );
}

export default Page;
