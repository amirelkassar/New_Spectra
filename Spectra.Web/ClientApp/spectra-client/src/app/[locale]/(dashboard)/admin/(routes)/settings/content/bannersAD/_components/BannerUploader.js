"use client";
import { useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import UploadImgIcon from "@/assets/icons/uploadImg";

export function BannerUploader({ setDataImg, dataImg }) {
  const [largeFile, setLargeFile] = useState("");
  const handleHeaderInputChange = (e) => {
    setLargeFile("");
    setDataImg([URL.createObjectURL(e[0]), ...dataImg]);
  };
  return (
    <div>
      <Dropzone
        onDrop={handleHeaderInputChange}
        onReject={() =>
          setLargeFile(
            "It was rejected because of the large size of the picture "
          )
        }
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        className=" mb-7 lgl:mb-10 rounded-xl h-[120px] lgl:h-[176px]"
      >
        <div className="flex gap-4 lgl:py-8 flex-col justify-center items-center">
          <UploadImgIcon className={'h-auto w-8 lgl:w-[50px]'} />
          <h2 className="text-[12px] lgl:text-base text-grayDark font-Light">
            اضغط هنا لرفع صورة
          </h2>
        </div>
        {largeFile && <p className="text-rose-500 text-sm">{largeFile}</p>}
      </Dropzone>
    </div>
  );
}
