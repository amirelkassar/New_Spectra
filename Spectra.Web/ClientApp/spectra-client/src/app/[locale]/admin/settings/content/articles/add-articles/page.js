"use client";
import Card from "@/components/card";
import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import UploadImgIcon from "@/assets/icons/uploadImg";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Image from "next/image";
import DeleteIcon from "@/assets/icons/delete";
import { Textarea, TextInput } from "@mantine/core";
import Button from "@/components/button";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";

function Page() {
  const [largeFile, setLargeFile] = useState("");
  const [dataImg, setDataImg] = useState("");
  const [sections, setSections] = useState([]); // State for managing sections

  const handleHeaderInputChange = (e) => {
    setLargeFile("");
    setDataImg(URL.createObjectURL(e[0]));
  };

  const handleAddSection = () => {
    setSections((prevSections) => [
      ...prevSections,
      { img: "", content: "" }, // New section with empty image and content
    ]);
  };

  const handleSectionImgChange = (index, file) => {
    const imgURL = URL.createObjectURL(file[0]);
    const newSections = [...sections];
    newSections[index].img = imgURL;
    setSections(newSections);
  };

  const handleSectionContentChange = (index, value) => {
    const newSections = [...sections];
    newSections[index].content = value;
    setSections(newSections);
  };

  const handleRemoveSection = (index) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  };
  const handleRemoveSectionImg = (index) => {
    const newSections = [...sections];
    newSections[index].img = ""; // Only clear the image for that section
    setSections(newSections);
  };
  return (
    <Card>
      <div className="flex items-center gap-4 lg:gap-7 mb-6 lg:mb-12">
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
          className="w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-base lg:text-[20px]"> اضافة مقال</h2>
      </div>

      {/* Title Input */}
      <TextInput
        placeholder="اكتب العنوان هنا"
        classNames={{
          input:
            "min-h-11 lg:min-h-[64px] h-auto pe-6 w-full lg:max-w-[660px] border-[#CFD0D7] text-base rounded-lg lg:text-[24px] font-Bold",
        }}
      />

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col gap-8 mt-8">
          {/* Image Upload for Section */}
          {section.img ? (
            <div className="relative w-full max-w-[890px] h-[160px] lg:h-[290px]">
              <Image
                src={section.img}
                width={890}
                height={300}
                priority={true}
                alt={"img"}
                className="w-full h-full object-cover rounded-[10px]"
              />
              <button
                onClick={() => handleRemoveSectionImg(index)} // Change the function to handle only image removal
                className="size-7 p-1 duration-200 hover:shadow-md rounded-full bg-red/20 flex items-center justify-center absolute top-2 end-3"
              >
                <DeleteIcon />
              </button>
            </div>
          ) : (
            <Dropzone
              maxFiles={1}
              onDrop={(file) => handleSectionImgChange(index, file)}
              maxSize={5 * 1024 ** 2}
              className="lg:mb-10 mb-0 rounded-xl"
            >
              <div className="flex gap-4 py-8 flex-col justify-center h-[160px] lg:h-[300px] items-center">
                <UploadImgIcon />
                <h2 className="text-base text-grayDark font-Light">
                  اضغط هنا لرفع صورة
                </h2>
              </div>
            </Dropzone>
          )}

          {/* Text Content for Section */}
          <Textarea
            placeholder="اكتب المحتوى هنا .."
            radius="md"
            size="xl"
            autosize
            minRows={4}
            value={section.content}
            onChange={(e) => handleSectionContentChange(index, e.target.value)}
            classNames={{
              input:
                "min-h-[320px] lg:min-h-[400px] bg-[#FCFCFD] text-base lg:text-[20px] border border-[#CFD0D7]",
            }}
          />
        </div>
      ))}

      {/* Button to Add New Section */}
      <button
        onClick={handleAddSection}
        className="flex flex-col mt-12 gap-2 lgl:gap-4 duration-200 hover:shadow-md py-8 items-center justify-center w-full px-4 min-h-[90px] lgl:min-h-[150px] bg-blueLight border border-greenMain rounded-xl font-bold"
      >
        <PlusInsideCircleIcon className={"w-6 lgl:w-11 h-auto"} />
        <p className="text-sm lgl:text-xl font-Bold text-center">إضافة قسم</p>
      </button>

      {/* Confirmation and Cancel Buttons */}
      <div className="flex flex-col mt-10 items-center gap-3">
        <Button
          className="w-full h-12 lg:h-[60px] text-base lg:text-[20px] font-Bold duration-300 hover:shadow-md"
          variant="secondary"
        >
          تأكيد
        </Button>
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
          className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-12 lg:h-[60px] text-base lg:text-[20px] font-Bold"
        >
          إلغاء
        </Link>
      </div>
    </Card>
  );
}

export default Page;
