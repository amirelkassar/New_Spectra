"use client";

import { useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import UploadImgIcon from "@/assets/icons/uploadImg";
import Image from "next/image";
import Button from "@/components/button";
import DeleteIcon from "@/assets/icons/delete";

export function BannerUploader({ dataImg, setDataImg }) {
  const [largeFile, setLargeFile] = useState("");

  const handleHeaderInputChange = (files) => {
    setLargeFile("");
    const newImageUrl = URL.createObjectURL(files[0]);
    setDataImg(newImageUrl);
  };

  return (
    <div>
      {/* Display the uploaded image */}
      {dataImg ? (
        <div className="mt-4">
          <Button
            onClick={() => {
              setDataImg(null);
            }}
            className={
              "text-[12px] lg:text-[16px] font-Light !py-0 px-4 flex font-bold items-center justify-center h-8 lgl:h-11 ring-1 !ring-red text-red border-none w-fit !gap-3"
            }
          >
            <DeleteIcon /> مسح
          </Button>
          <Image
            src={dataImg}
            alt="Banner image"
            priority={true}
            width={960}
            height={266}
            className="w-full mt-2 lgl:mt-4 mb-6 lgl:mb-9 h-[130px] mdl:h-[210px] object-contain"
          />
        </div>
      ) : (
        <Dropzone
          onDrop={handleHeaderInputChange}
          onReject={() =>
            setLargeFile(
              "It was rejected because of the large size of the picture"
            )
          }
          maxSize={5 * 1024 ** 2} // Limit to 5MB
          accept={IMAGE_MIME_TYPE}
          className="mb-7  mdl:mb-10 rounded-xl h-[130px] mdl:h-[210px]"
        >
          <div className="flex gap-4 mt-3 lgl:py-8 flex-col justify-center items-center">
            <UploadImgIcon className="h-auto w-8 mdl:w-[50px]" />
            <h2 className="text-[12px] mdl:text-base text-grayDark font-light">
              اضغط هنا لرفع صورة
            </h2>
          </div>
          {largeFile && <p className="text-rose-500 text-sm">{largeFile}</p>}
        </Dropzone>
      )}
    </div>
  );
}
