"use client";
import BackIcon from "@/assets/icons/back";
import CloseIcon from "@/assets/icons/close";
import UploadImgIcon from "@/assets/icons/uploadImg";
import Button from "@/components/button";
import InputGreen from "@/components/Input-green";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { useCreateDrug } from "@/useAPI/admin/main-data/drugs";
import { Dropzone } from "@mantine/dropzone";
import Image from "next/image";
import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    Name: "",
    code: "",
    ActiveIngredient: "",
    ScientificName: "",
    type: "",
    RecommendedDosage: "",
    Doncentration: "",
    DrugInteractionsWithOtherdrugs: "",
    Contraindications: "",
    notes: "",
    photos: [], // Include photos directly in formData
  });

  const { mutate: createDrug } = useCreateDrug();

  const handleHeaderInputChange = (files) => {
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files], // Update photos array with uploaded files
    }));
  };

  const handleDeleteImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index), // Remove from photos array
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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

    createDrug(formDataToSend); // Send the FormData object
  };

  return (
    <div>
      <div className="flex mb-10 items-center gap-4">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.HOME}
          className="w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة وصفة طبية</h2>
      </div>
      <div>
        <form className="flex flex-col gap-4 lg:gap-8 px-3 mb-14" onSubmit={handleSubmit}>
          <div className="flex-1 w-full h-auto relative">
            <h3 className="text-[12px] md:text-[16px] mb-2 mdl:mb-4">صورة العقار</h3>
            {formData.photos.length > 0 ? (
              <div className="flex w-full h-auto items-center flex-wrap gap-3">
                {formData.photos.map((img, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center max-w-[100px] mdl:max-w-[140px] h-[60px] mdl:h-[98px] w-auto"
                  >
                    <Image
                      src={URL.createObjectURL(img)}
                      width={100}
                      height={100}
                      priority={true}
                      alt={`img-${index}`}
                      className="h-full place-content-center block w-auto object-contain object-center"
                    />
                    <div
                      onClick={() => handleDeleteImage(index)}
                      className="absolute cursor-pointer bg-white duration-200 hover:shadow-md top-0 start-0 bg-red-500 text-white rounded-full"
                    >
                      <CloseIcon className={"w-5 h-auto"} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Dropzone
                onDrop={handleHeaderInputChange}
                maxSize={5 * 1024 ** 2}
                className="mb-1 mdl:mb-5 rounded-xl"
              >
                <div className="flex gap-1 p1-8 flex-col justify-center h-14 mdl:h-[80px] items-center">
                  <UploadImgIcon className="w-6 mdl:w-8 h-auto" />
                  <h2 className="text-xs mdl:text-base text-grayDark font-Light">
                    اضغط هنا لرفع صورة
                  </h2>
                </div>
              </Dropzone>
            )}
          </div>

          <InputGreen
            label="اسم العقار"
            name="Name"
            placeholder="اسم العقار او نوع التوصية"
            value={formData.Name}
            onChange={handleInputChange}
          />
          <InputGreen
            label="الكود"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
          />
          <InputGreen
            label="المادة الفعالة"
            name="ActiveIngredient"
            value={formData.ActiveIngredient}
            onChange={handleInputChange}
          />
          <InputGreen
            label="الاسم العلمي"
            name="ScientificName"
            value={formData.ScientificName}
            onChange={handleInputChange}
          />
          <InputGreen
            label="النوع"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
          <InputGreen
            label="الجرعة الموصى به"
            name="RecommendedDosage"
            value={formData.RecommendedDosage}
            onChange={handleInputChange}
          />
          <InputGreen
            label="تركيز الدواء"
            name="Doncentration"
            value={formData.Doncentration}
            onChange={handleInputChange}
          />
          <InputGreen
            label="تفاعلات الدواء مع أدوية أخرى"
            name="DrugInteractionsWithOtherdrugs"
            value={formData.DrugInteractionsWithOtherdrugs}
            onChange={handleInputChange}
          />
          <InputGreen
            label="موانع الاستخدام"
            name="Contraindications"
            value={formData.Contraindications}
            onChange={handleInputChange}
          />
          <InputGreen
            label="ملاحظات"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
        </form>
        <div className="flex items-center gap-4 md:gap-10 flex-col md:flex-row">
          <Button
          onClick={handleSubmit}
            type="submit"
            variant="secondary"
            className="max-w-[290px] w-full font-bold disabled:cursor-not-allowed md:h-[60px]"
          >
            حفظ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
