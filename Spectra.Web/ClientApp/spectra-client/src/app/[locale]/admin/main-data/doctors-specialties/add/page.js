"use client";
import React, { useState } from "react";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import Button from "@/components/button";
import ROUTES from "@/routes";
import { Textarea } from "@mantine/core";
import InputGreen from "@/components/Input-green";
import { useCreateSpecialization } from "@/useAPI/admin/main-data/specialties";
function Page() {
  const { mutate: CreateDiagnostics } = useCreateSpecialization();
  const [formData, setFormData] = useState({
    specializationName: "",
    description: "",
    consultationCost: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateDiagnostics(formData);
  };
  return (
    <div>
      <div className="flex mb-10 lgl:mt-0 mt-6   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.SPECIALTIES}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة تخصص</h2>
      </div>
      <div>
        <form
          className="flex flex-col gap-4 lg:gap-8 px-3 mb-14"
          onSubmit={handleSubmit}
        >
          <InputGreen
            label={"اسم التخصص"}
            name="specializationName"
            value={formData.specializationName}
            onChange={handleChange}
          />
          <Textarea
            classNames={{
              input:
                "min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px]  border-greenMain rounded-2xl",
              label: "text-[12px]  md:text-[16px]",
            }}
            label={"وصف التخصص"}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <InputGreen
            label={"تكلفة الاستشارة"}
            type="number"
            name="consultationCost"
            value={formData.consultationCost}
            onChange={handleChange}
          />

          <InputGreen
            label={"الكود"}
            type="number"
            name="code"
            value={formData.code}
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
