"use client";
import BackIcon from "@/assets/icons/back";
import CloseIcon from "@/assets/icons/close";
import UploadImgIcon from "@/assets/icons/uploadImg";
import Button from "@/components/button";
import InputGreen from "@/components/Input-green";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { Dropzone } from "@mantine/dropzone";
import Image from "next/image";
import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    propertyName: "",
    code: "",
    ActiveIngredient: "",
    ScientificName: "",
    type: "",
    RecommendedDosage: "",
    Doncentration: "",
    DrugInteractionsWithOtherdrugs: "",
    contraindications: "",
    notes: "",
  });
  const [dataImg, setDataImg] = useState([]);
  const [largeFile, setLargeFile] = useState("");

  const handleHeaderInputChange = (e) => {
    setLargeFile("");
    const newImages = e.map((file) => URL.createObjectURL(file));
    setDataImg((prev) => [...prev, ...newImages]);
  };
  const handleDeleteImage = (index) => {
    setDataImg((prev) => prev.filter((_, i) => i !== index));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="flex mb-10   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.HOME}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة وصفة طبية</h2>
      </div>
      <div>
        <form className="flex flex-col gap-4 lg:gap-8 px-3 mb-14">
          <div className="flex-1 w-full h-auto relative">
            <h3 className="text-[12px] md:text-[16px] mb-2 mdl:mb-4">
              صورة العقار
            </h3>
            {dataImg.length > 0 ? (
              <div className="flex w-full h-auto items-center flex-wrap gap-3">
                {dataImg.map((img, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center max-w-[100px] mdl:max-w-[140px] h-[60px] mdl:h-[98px] w-auto"
                  >
                    <Image
                      src={img}
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
                onReject={() =>
                  setLargeFile(
                    "It was rejected because of the large size of the picture."
                  )
                }
                maxSize={5 * 1024 ** 2}
                className="mb-1 mdl:mb-5 rounded-xl"
              >
                <div className="flex gap-1 p1-8 flex-col justify-center h-14 mdl:h-[80px] items-center">
                  <UploadImgIcon className="w-6 mdl:w-8 h-auto" />
                  <h2 className="text-xs mdl:text-base text-grayDark font-Light">
                    اضغط هنا لرفع صورة
                  </h2>
                </div>
                {largeFile && (
                  <p className="text-rose-500 text-sm">{largeFile}</p>
                )}
              </Dropzone>
            )}
          </div>

          <InputGreen
            label="اسم العقار"
            name="propertyName"
            placeholder="اسم العقار او نوع التوصية"
            value={formData.propertyName}
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
            name="contraindications"
            value={formData.contraindications}
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
            onClick={() => {
              console.log(formData);
            }}
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
