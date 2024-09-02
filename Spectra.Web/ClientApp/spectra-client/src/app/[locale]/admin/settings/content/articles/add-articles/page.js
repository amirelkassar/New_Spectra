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
function Page() {
  const [largeFile, setLargeFile] = useState("");
  const [dataImg, setDataImg] = useState("");
  const handleHeaderInputChange = (e) => {
    setLargeFile("");
    setDataImg(URL.createObjectURL(e[0]));
  };
  console.log(dataImg);

  return (
    <Card>
      <div className="flex items-center gap-4 lg:gap-7 mb-12">
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-[36px]"> اضافة مقال</h2>
      </div>
      <div className="flex flex-col gap-8">
        <TextInput
          placeholder="اكتب العنوان هنا"
          classNames={{
            input:
              "min-h-[64px] h-auto pe-6 w-full lg:max-w-[660px]  border-[#CFD0D7] text-[24px] font-Bold",
          }}
        />
        {dataImg ? (
          <div className="relative w-full max-w-[890px] h-[290px]">
            <Image
              src={dataImg}
              width={890}
              height={300}
              priority={true}
              alt={"img"}
              className=" w-full h-full object-cover rounded-[10px] "
            />
            <button
              onClick={() => setDataImg("")}
              className=" size-7 p-1 duration-200 hover:shadow-md rounded-full bg-red/20 flex items-center justify-center absolute top-2 end-3"
            >
              <DeleteIcon />
            </button>
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
            {largeFile && <p className="text-rose-500 text-sm">{largeFile}</p>}
          </Dropzone>
        )}

        <Textarea
          placeholder="اكتب المحتوى هنا .."
          radius="md"
          size="xl"
          autosize
          minRows={4}
          classNames={{
            input: "min-h-[400px] bg-[#FCFCFD]  border border-[#CFD0D7] ",
          }}
        />
      </div>
      <div className="flex flex-col mt-10 items-center gap-3">
        <Button
          className="w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md"
          variant="secondary"
        >
          تأكيد
        </Button>
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
          className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
        >
          إلغاء
        </Link>
      </div>
    </Card>
  );
}

export default Page;
