"use client";
import React, { useEffect, useState } from "react";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import Button from "@/components/button";
import ROUTES from "@/routes";
import { MultiSelect } from "@mantine/core";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import InputGreen from "@/components/Input-green";
import { useCreateInternalExamination } from "@/useAPI/admin/main-data/testsInterior";
import GetErrorMsg from "@/components/getErrorMsg";
function Page() {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    ExaminationTypes: [],
  });

  const {
    mutate: createInternalExamination,
    error,
    isSuccess,
    isError,
    reset,
  } = useCreateInternalExamination();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (isError) {
      reset();
    }
  };
  useEffect(() => {
    isSuccess &&
      setFormData({
        name: "",
        code: "",
        ExaminationTypes: [],
      });
  }, [isSuccess]);
  const handleSpecialtiesChange = (selected) => {
    setFormData((prevData) => ({
      ...prevData,
      ExaminationTypes: selected,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    createInternalExamination(formData);
  };

  return (
    <div>
      <div className="flex mb-10 lgl:mt-0 mt-6   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.TESTSINTERIOR}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة فحص داخلى </h2>
      </div>
      <div>
        <form className="flex flex-col gap-4 lg:gap-8 px-3 mb-14">
          <InputGreen
            label="اسم الفحص"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={GetErrorMsg(error, "Name")}
          />
          <InputGreen
            label="كود الفحص"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
            error={GetErrorMsg(error, "Code")}
          />
          <MultiSelect
            data={["نفسى", "علاجى"]}
            value={formData.ExaminationTypes}
            onChange={handleSpecialtiesChange}
            error={GetErrorMsg(error, "ExaminationTypes")}
            label="اختر تخصصات الفحص"
            placeholder="اختر تخصص"
            rightSection={<ArrowDownIcon />}
            className="MultiSelect h-auto flex-1"
            classNames={{
              input: " !h-auto py-1 min-h-[60px]",
              label: "text-[12px] md:text-[16px] mb-2",
            }}
          />
        </form>
        <div className="flex mt-10 items-center gap-4 md:gap-10 flex-col md:flex-row">
          <Button
            onClick={handleSubmit}
            variant="secondary"
            className={
              "max-w-[290px] w-full font-bold disabled:cursor-not-allowed md:h-[60px]"
            }
          >
            حفظ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
