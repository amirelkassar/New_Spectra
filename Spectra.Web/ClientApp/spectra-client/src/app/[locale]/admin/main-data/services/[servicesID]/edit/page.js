"use client";
import BackIcon from "@/assets/icons/back";
import Button from "@/components/button";
import GetErrorMsg from "@/components/getErrorMsg";
import InputGreen from "@/components/Input-green";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import {
  GetMasterDataServicesID,
  useEditMasterDataServices,
} from "@/useAPI/admin/main-data/services";
import { Textarea } from "@mantine/core";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const [formData, setFormData] = useState({
    AvailableSrvices: "1",
    name: "",
    definitionServices: "",
    price: "",
    termsAndConditions: "",
  });
  const { data, isLoading } = GetMasterDataServicesID(params.servicesID);
  const {
    mutate: EditMasterDataServices,
    error,
    isError,
    reset,
  } = useEditMasterDataServices(formData?.id);
  useEffect(() => {
    data?.data.data ? setFormData(data.data.data) : null;
  }, [isLoading]);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = formData.id;
    console.log(id);

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file) => {
          formDataToSend.append(key, file);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    EditMasterDataServices(formDataToSend);
  };
  return (
    <div>
      <div className="flex items-center gap-4 lg:gap-7 mb-12">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(1) + "?show=false"}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-[36px]"> تعديل خدمة - داخلية</h2>
      </div>
      <form className="lgl:max-w-[80%] flex flex-col gap-6 lg:gap-10 w-full mx-auto lgl:mt-20">
        <InputGreen
          label="اسم الخدمة"
          name="name"
          value={formData?.name||''}
          onChange={handleInputChange}
          error={GetErrorMsg(error, "ServicesName")}
        />
        <InputGreen
          label="تعريف للخدمة"
          name="definitionServices"
          value={formData?.definitionServices||''}
          onChange={handleInputChange}
          error={GetErrorMsg(error, "definitionServices")}
        />
        <InputGreen
          label="سعر الخدمة"
          name="price"
          type="number"
          value={formData?.price||''}
          onChange={handleInputChange}
          error={GetErrorMsg(error, "Price")}
        />
        <Textarea
          label="الشروط و الاحكام"
          name="termsAndConditions"
          value={formData?.termsAndConditions||''}
          error={GetErrorMsg(error, "TermsAndConditions")}
          onChange={handleInputChange}
          radius="md"
          size="xl"
          autosize
          minRows={4}
          classNames={{
            input:
              "min-h-[160px] h-auto  w-full rounded-lg border-greenMain text-[24px]",
            label: "text-base mb-2",
          }}
        />
        <div className="flex flex-col mt-16 items-center gap-3">
          <Button
            onClick={handleSubmit}
            className="w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md"
            variant="secondary"
          >
            حفظ
          </Button>
          <Link
            href={ROUTES.ADMIN.DATAMAIN.SERVICESADD}
            className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Page;
