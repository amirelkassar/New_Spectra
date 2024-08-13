"use client";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Image from "next/image";
import ReplaceImgIcon from "@/assets/icons/replaceImg";
import Button from "@/components/button";
import DeleteIcon from "@/assets/icons/delete";
import { useState } from "react";
export function BannerItem({ imageSrc, onDelete, setDataImg, dataImg, id }) {
  const handleHeaderInputChange = (e) => {
    setLargeFile("");
    const updatedImages = [...dataImg];
    updatedImages[id] = URL.createObjectURL(e[0]);
    setDataImg(updatedImages);
  };
  const [largeFile, setLargeFile] = useState("");
  return (
    <div>
      <div className="flex items-start gap-6">
        <Button
          onClick={() => {
            onDelete();
          }}
          className={
            "text-[12px] lg:text-[16px] font-Light !py-0 px-4 flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none w-fit !gap-3"
          }
        >
          <DeleteIcon /> مسح
        </Button>
        <div className="flex flex-col gap-1 justify-start">
          <Dropzone
            onDrop={handleHeaderInputChange}
            onReject={() =>
              setLargeFile(
                "It was rejected because of the large size of the picture "
              )
            }
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            className=" rounded-xl w-fit h-11 p-0 flex items-center justify-center px-4 border-solid border-black"
          >
            <div className="flex items-center gap-3">
              <ReplaceImgIcon />
              <h2 className="text-base font-Light">تبديل</h2>
            </div>
          </Dropzone>
          {largeFile && <p className="text-rose-500 text-sm">{largeFile}</p>}
        </div>
      </div>
      <Image
        src={imageSrc}
        alt="Banner image"
        priority={true}
        width={960}
        height={266}
        className="w-full mt-4 mb-9 h-[265px] object-contain"
      />
    </div>
  );
}
