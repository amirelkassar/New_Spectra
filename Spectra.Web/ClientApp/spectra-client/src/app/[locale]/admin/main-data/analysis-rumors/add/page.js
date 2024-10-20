"use client";
import React, { useState } from "react";
import { Link } from "@/navigation";
import Button from "@/components/button";
import ROUTES from "@/routes";
import { Textarea } from "@mantine/core";
import BackIcon from "@/assets/icons/back";
import AnalysisIcon from "@/assets/icons/analysis";
import RumorsIcon from "@/assets/icons/rumors";
import InputGreen from "@/components/Input-green";
import { useCreateMedicalTests } from "@/useAPI/admin/main-data/analysis";
function Page() {
  const [formData, setFormData] = useState({
    scientificName: "",
    englishName: "",
    code: "",
    notes: "",
    examinationTypes: "1",
  });
  const { mutate: createMedicalTests } = useCreateMedicalTests();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeType = (type) => {
    setFormData((prev) => ({
      ...prev,
      examinationTypes: type,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createMedicalTests(formData);
  };
  return (
    <div>
      <div className="flex mb-10 lgl:mt-0 mt-6   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة نوع </h2>
      </div>
      <div>
        <form
          className="flex flex-col gap-4 lg:gap-8 px-3 mb-14"
          onSubmit={handleSubmit}
        >
          <div className="mdl:mb-12 mb-7">
            <h2 className="text-[14px] mb-4 mdl:text-[20px]">اختر نوع</h2>
            <div className="flex items-center justify-center gap-8">
              <div
                className={`flex-1 md:max-w-[380px] duration-200 cursor-pointer hover:shadow-md px-4 mdl:px-7 py-4 mdl:py-6 rounded-[10px] flex flex-col mdl:flex-row items-center gap-5 mdl:gap-8 ${
                  formData.examinationTypes === "1"
                    ? "bg-greenMain"
                    : "bg-blueLight"
                }`}
                onClick={() => {
                  handleChangeType("1");
                }}
              >
                <div className="size-[44px] mdl:size-[80px] rounded-[10px] bg-white flex items-center justify-center p-3 ">
                  <AnalysisIcon className={"w-6 lg:w-8 h-auto"} />
                </div>
                <h3
                  className={`text-[14px] mdl:text-[20px] font-Bold ${
                    formData.examinationTypes === "1" ? "text-white" : ""
                  } `}
                >
                  تحاليل
                </h3>
              </div>

              <div
                className={`flex-1 md:max-w-[380px] duration-200 cursor-pointer hover:shadow-md px-4 mdl:px-7 py-4 mdl:py-6 rounded-[10px] flex flex-col mdl:flex-row items-center gap-5 mdl:gap-8 ${
                  formData.examinationTypes === "2"
                    ? "bg-greenMain"
                    : "bg-blueLight"
                }`}
                onClick={() => {
                  handleChangeType("2");
                }}
              >
                <div className="size-[44px] mdl:size-[80px] rounded-[10px] bg-white flex items-center justify-center p-3 ">
                  <RumorsIcon className={"w-6 lg:w-8 h-auto"} />
                </div>
                <h3
                  className={`text-[14px] mdl:text-[20px] font-Bold ${
                    formData.examinationTypes === "2" ? "text-white" : ""
                  } `}
                >
                  اشعات
                </h3>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mdl:gap-8 flex-col mdl:flex-row w-full flex-1">
            <InputGreen
              label={"الاسم العلمى  باللغة العربية  "}
              className="flex-1"
              name="scientificName"
              value={formData.scientificName}
              onChange={handleChange}
            />
            <InputGreen
              label={"الاسم العلمى  باللغة الانجليزية  "}
              className="flex-1"
              name="englishName"
              value={formData.englishName}
              onChange={handleChange}
            />
          </div>

          <InputGreen
            label={"الكود  "}
            name="code"
            value={formData.code}
            onChange={handleChange}
          />

          <Textarea
            classNames={{
              input:
                "min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px]  border-greenMain rounded-2xl",
              label: "text-[12px]  md:text-[16px]",
            }}
            label={"ملاحظة "}
            name="notes"
            value={formData.notes}
            onChange={handleChange}
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
