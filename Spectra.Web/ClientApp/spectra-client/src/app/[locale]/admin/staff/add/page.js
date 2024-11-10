"use client";
import BackIcon from "@/assets/icons/back";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React, { useEffect, useState } from "react";
import FormOne from "./_components/formOne";
import FormDocSpe from "./_components/formDocSpe";
import FormStaff from "./_components/formStaff";
import FormCreateEmail from "./_components/formCreateEmail";
import Button from "@/components/button";
import { useCreateStaff } from "@/useAPI/admin/staff/staff";

function Page() {
  const [firstData, setFirstData] = useState("");
  const [DocSpeData, setDocSpeData] = useState("");
  const [StaffData, setStaffData] = useState("");
  const [PageForm, setPageForm] = useState(1);
  console.log(StaffData);

  const {
    mutate: CreateStaff,
    error,
    isSuccess,
    isError,
    reset,
  } = useCreateStaff();
  console.log(firstData);

  useEffect(() => {
    if (isSuccess) {
      setFirstData("");
      setDocSpeData("");
      setStaffData("");
      setPageForm(1);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    let formData =
      firstData.JobTypes === "1" || firstData.JobTypes === "2"
        ? { ...firstData, ...DocSpeData }
        : { ...firstData, ...StaffData };

    console.log(formData);

    e.preventDefault();
    const formDataToSend = new FormData();

    // Append all form data, including images
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file) => {
          formDataToSend.append(key, file); // Append each file if it's an array
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    CreateStaff(formDataToSend); // Send the FormData object
  };
  /*fun for form one*/
  const handleOnChangeOne = (e) => {
    const { name, value } = e.target;
    setFirstData({
      ...firstData,
      [name]: value,
    });
    if (isError) {
      reset();
    }
  };
  const handleOnChangePHone = (value, country) => {
    setFirstData({
      ...firstData,
      PhoneNumbers: value,
      CountryCode: "+" + country.dialCode,
    });
    if (isError) {
      reset();
    }
  };
  /* end fun for form one*/

  /*fun for form Doc*/
  const handleOnChangeDoc = (e) => {
    const { name, value } = e.target;
    setDocSpeData({
      ...DocSpeData,
      [name]: value,
    });
    if (isError) {
      reset();
    }
  };

  /*fun for form Staff*/
  const handleOnChangeStaff = (e) => {
    const { name, value } = e.target;
    setStaffData({
      ...StaffData,
      [name]: value,
    });
    if (isError) {
      reset();
    }
  };
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
          handleOnChange={handleOnChangeOne}
          handleOnChangePHone={handleOnChangePHone}
          error={error}
        />
      ) : PageForm === 2 ? (
        firstData.JobTypes === "1" || firstData.JobTypes === "2" ? (
          <FormDocSpe
            setPageForm={setPageForm}
            handleOnChange={handleOnChangeDoc}
            setDocSpeData={setDocSpeData}
            DocSpeData={DocSpeData}
          />
        ) : (
          <FormStaff
            handleOnChange={handleOnChangeStaff}
            setPageForm={setPageForm}
            setStaffData={setStaffData}
            StaffData={StaffData}
          />
        )
      ) : PageForm === 3 ? (
        <div>
          <FormCreateEmail
            handleOnChange={handleOnChangeOne}
            firstData={firstData}
          />
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:max-w-[94%] mx-auto  items-center mt-12 md:mt-20  justify-center flex-1 w-full">
            <Button
              onClick={(e) => {
                console.log("done seend ");
                handleSubmit(e);
              }}
              variant="secondary"
              className="font-Bold flex-1 text-base md:text-xl w-[434px] h-14 max-w-full"
            >
              حفظ
            </Button>
            <Button
              onClick={() => setPageForm(2)}
              className="font-Bold flex-1 text-base md:text-xl w-[434px] h-14 max-w-full"
            >
              السابق
            </Button>
          </div>
        </div>
      ) : null}
    </Card>
  );
}

export default Page;
