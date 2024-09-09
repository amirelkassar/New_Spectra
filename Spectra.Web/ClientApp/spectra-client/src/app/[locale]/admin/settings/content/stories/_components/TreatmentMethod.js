import DeleteIcon from "@/assets/icons/delete";
import EditImgIcon from "@/assets/icons/editImg";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import SadFaceIcon from "@/assets/icons/sad-face";
import UploadImgIcon from "@/assets/icons/uploadImg";
import { Textarea } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import Image from "next/image";
import React from "react";

function TreatmentMethod({ sectionsMethod, setSectionsMethod }) {
  const addSectionMethod = () => {
    setSectionsMethod([
      ...sectionsMethod,
      { id: Date.now(), image: null, text: "" },
    ]);
  };

  const updateSectionMethod = (id, field, value) => {
    setSectionsMethod(
      sectionsMethod.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };
  return (
    <div className="mb-20">
      <h2 className="text-base lgl:text-2xl font-Bold mb-5 lgl:-mb-5">
        طريقة العلاج
      </h2>
      <div className="flex flex-col gap-5 lgl:gap-11">
        {sectionsMethod.map((section, index) => (
          <div
            key={section.id}
            className="flex lgl:items-center  justify-center gap-5 lgl:gap-7"
          >
            <div className=" relative max-w-[440px] lgl:pt-16 h-full  w-full">
              <Textarea
                placeholder="اكتب هنا..."
                radius="md"
                autosize
                minRows={4}
                classNames={{
                  input:
                    "min-h-[90px] h-auto max-w-[440px] w-full border bg-grayBlueLight border-grayMedium ",
                }}
                className="max-w-[440px] relative z-[2]  w-full"
              />
              <p className="absolute -top-16 right-5 text-[100px] lgl:text-[200px] font-Bold text-black/5 leading-[150px] lgl:leading-[300px]">
                {index >= 10 ? index + 1 : "0" + (index + 1)}
              </p>
            </div>
            <div className=" relative max-w-full w-[480px] max-h-[110px]">
              {section.image ? (
                <div className="relative w-full max-w-full h-auto">
                  <Image
                    src={section.image}
                    width={890}
                    height={300}
                    priority={true}
                    alt={"img"}
                    className=" w-full h-full object-cover rounded-[10px] "
                  />
                  <Dropzone
                    maxFiles={1}
                    onDrop={(files) =>
                      updateSectionMethod(
                        section.id,
                        "image",
                        URL.createObjectURL(files[0])
                      )
                    }
                    maxSize={5 * 1024 ** 2}
                    className=" size-6 lgl:size-11 p-[2px] duration-200 hover:shadow-md hover:bg-greenMain rounded-full bg-greenMain flex items-center justify-center absolute left-1/2 -translate-x-1/2 -bottom-5"
                  >
                    <EditImgIcon className={"w-full h-auto flex-1"} />
                  </Dropzone>
                </div>
              ) : (
                <Dropzone
                  maxFiles={1}
                  onDrop={(files) =>
                    updateSectionMethod(
                      section.id,
                      "image",
                      URL.createObjectURL(files[0])
                    )
                  }
                  maxSize={5 * 1024 ** 2}
                  className=" rounded-xl h-full"
                  
                >
                  <div className="flex gap-3 lgl:gap-4  lgl:py-8 flex-col justify-center h-auto lgl:h-[135px] w-full items-center">
                    <UploadImgIcon className={'w-9 h-auto lgl:w-[50px]'}/>
                    <h2 className="text-[12px] lgl:text-base text-grayDark font-Light">
                      اضغط هنا لرفع صورة
                    </h2>
                  </div>
                </Dropzone>
              )}
            </div>
          </div>
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            addSectionMethod();
          }}
          className="flex flex-col gap-4 duration-200 hover:shadow-md py-3 lgl:py-8 items-center justify-center w-full px-4 min-h-[80px] lgl:min-h-[150px]  bg-blueLight border border-greenMain rounded-xl font-bold"
        >
          <PlusInsideCircleIcon className={"w-6 lgl:w-11 h-auto"} />
          <p className="text-sm lgl:text-xl font-Bold text-center">
            {" "}
            إضافة قسم
          </p>
        </button>
      </div>
    </div>
  );
}

export default TreatmentMethod;
