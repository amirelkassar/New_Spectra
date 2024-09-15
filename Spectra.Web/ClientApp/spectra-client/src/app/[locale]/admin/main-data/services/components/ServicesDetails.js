"use client";
import { Textarea, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "@/navigation";
import Button from "@/components/button";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import { Dropzone } from "@mantine/dropzone";
import Image from "next/image";
import UploadImgIcon from "@/assets/icons/uploadImg";
import EditImgIcon from "@/assets/icons/editImg";
import CheckHeartIcon from "@/assets/icons/check-heart";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import imgService from "@/assets/images/packages-details-page-bg.png";
const data = {
  mainTitle: "عنوان الخدمة",
  definition: "A brief definition of the service",
  sections: [
    {
      title: "عنواااااااااااااان 1",
      content: "وصصصففففففففف 1",
    },
    {
      title: "عنواااااااااااااان 2",
      content: "وصصصففففففففف 2",
    },
  ],
  price: 1005,
  terms:
    'نحن لا نتحمل أي مسؤولية عن أي خسائر أو أضرار قد تنجم عن استخدامك للموقع/التطبيق. يُقدم الموقع/التطبيق على "أساس كما هو"، دون أي ضمانات من أي نوع.',
};
function ServicesDetails() {
  const [sections, setSections] = useState(data.sections);
  const [largeFile, setLargeFile] = useState("");
  const [dataImg, setDataImg] = useState(imgService);
  const handleHeaderInputChange = (e) => {
    setLargeFile("");
    setDataImg(URL.createObjectURL(e[0]));
  };
  const handleAddSection = () => {
    setSections([...sections, { title: "", content: "" }]);
  };
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newSections = sections.map((section, i) =>
      i === index ? { ...section, [name]: value } : section
    );
    setSections(newSections);
  };
  console.log(sections);
  return (
    <div>
      <div className="flex items-center gap-4 lg:gap-7 -mb-5 relative z-10">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.SERVICES}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-[36px]"> الخدمات </h2>
      </div>
      <form className=" w-full ">
        <div className="flex gap-3 mb-20 pb-10 before:content-[''] relative before:absolute before:bg-blueLight before:left-1/2 before:-translate-x-1/2  before:w-[calc(100%+40px)] before:h-[calc(100%+40px)] before:rounded-t-xl before:top-[-46px]  ">
          <div className="flex flex-1 pt-14 flex-col gap-5 relative">
            <TextInput
              label="عنوان الخدمة "
              defaultValue={data.mainTitle}
              classNames={{
                input:
                  "min-h-[60px] h-auto  w-full rounded-lg bg-grayBlueLight   border-grayMedium text-[24px] ",
                label: "text-base mb-2",
              }}
            />

            <Textarea
              label="تعريف مختصر للخدمة "
              defaultValue={data.definition}
              radius="md"
              size="xl"
              autosize
              minRows={4}
              classNames={{
                input:
                  "min-h-[160px] h-auto  w-full rounded-lg bg-grayBlueLight   border-grayMedium text-[24px] ",
                label: "text-base mb-2",
              }}
            />
          </div>
          <div className=" flex-1  w-full h-auto relative">
            {dataImg ? (
              <div className="relative w-full h-auto ">
                <Image
                  src={dataImg}
                  width={890}
                  height={300}
                  priority={true}
                  alt={"img"}
                  className=" w-full  max-h-[570px] h-full object-cover object-top rounded-[10px] "
                />
                <Dropzone
                  maxFiles={1}
                  onDrop={handleHeaderInputChange}
                  onReject={() =>
                    setLargeFile(
                      "It was rejected because of the large size of the picture "
                    )
                  }
                  maxSize={5 * 1024 ** 2}
                  className=" size-11 p-[2px] duration-200 hover:shadow-md hover:bg-greenMain rounded-full bg-greenMain flex items-center justify-center absolute left-1/2 -translate-x-1/2 -bottom-5"
                >
                  <EditImgIcon className={"w-full h-auto flex-1"} />
                </Dropzone>
              </div>
            ) : (
              <Dropzone
                maxFiles={1}
                onDrop={handleHeaderInputChange}
                onReject={() =>
                  setLargeFile(
                    "It was rejected because of the large size of the picture "
                  )
                }
                maxSize={5 * 1024 ** 2}
                className="mb-10 rounded-xl"
              >
                <div className="flex gap-4 py-8 flex-col justify-center h-[300px] items-center">
                  <UploadImgIcon />
                  <h2 className="text-base text-grayDark font-Light">
                    اضغط هنا لرفع صورة
                  </h2>
                </div>
                {largeFile && (
                  <p className="text-rose-500 text-sm">{largeFile}</p>
                )}
              </Dropzone>
            )}
          </div>
        </div>
        <div className="lgl:max-w-[80%] mx-auto mb-10">
          {sections.map((section, index) => (
            <div key={index} className="mb-5 flex flex-col gap-7 relative">
              <div className="content-[''] -right-8 w-5 h-5 absolute top-5 bg-no-repeat bg-[20px]">
                <CheckHeartIcon className=" w-full h-auto " />
              </div>
              <TextInput
                placeholder="اكتب العنوان هنا .."
                onChange={(e) => handleInputChange(index, e)}
                name="title"
                value={section.title}
                classNames={{
                  input:
                    "min-h-[60px] lgl:min-h-[90px] h-auto g-[#FCFCFD]  border border-[#CFD0D7]  w-full rounded-lg font-Bold lg:px-8 border text-[20px] ",
                  label: "text-base mb-2",
                }}
              />
              <Textarea
                placeholder="اكتب المحتوى هنا .."
                onChange={(e) => handleInputChange(index, e)}
                value={section.content}
                size="lg"
                name="content"
                radius="md"
                autosize
                minRows={4}
                classNames={{
                  input: "min-h-[170px] bg-[#FCFCFD]  border border-[#CFD0D7] ",
                }}
              />
            </div>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddSection();
            }}
            className="flex flex-col gap-4 duration-200 hover:shadow-md py-8 items-center justify-center w-full px-4 min-h-[150px]  bg-blueLight border border-greenMain rounded-xl font-bold"
          >
            <PlusInsideCircleIcon className={"w-11 h-auto"} />
            <p className="text-xl font-Bold text-center"> إضافة قسم</p>
          </button>
        </div>
        <div className="lgl:max-w-[80%] mx-auto">
          <div className="flex flex-col gap-8 w-full">
            <div className=" relative  ">
              <div className="content-[''] -right-8 w-5 h-5 absolute top-5 bg-no-repeat bg-[20px]">
                <CheckHeartIcon className=" w-full h-auto " />
              </div>
              <TextInput
                label="سعر الخدمة "
                defaultValue={data.price}
                type="number"
                classNames={{
                  input:
                    "min-h-[60px] lgl:min-h-[100px] w-fit h-auto  w-full rounded-lg font-Bold lg:px-8    border-blueLight border-2 text-[24px] ",
                  label: "text-base mb-2",
                }}
                className="w-fit"
              />
            </div>
            <Textarea
              placeholder="الشروط و الاحكام"
              defaultValue={data.terms}
              radius="md"
              autosize
              minRows={4}
              classNames={{
                input: "min-h-[170px] bg-[#FCFCFD]  border border-[#CFD0D7] ",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col mt-16 items-center gap-3 lgl:max-w-[80%] mx-auto">
          <Button
            className="w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md"
            variant="secondary"
          >
            تأكيد
          </Button>

          <Link
            href={ROUTES.ADMIN.DATAMAIN.SERVICES}
            className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ServicesDetails;
