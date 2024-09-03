"use client";
import BackIcon from "@/assets/icons/back";
import EditImgIcon from "@/assets/icons/editImg";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import UploadImgIcon from "@/assets/icons/uploadImg";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { Textarea, TextInput } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Image from "next/image";
import React, { useState } from "react";
import SadFaceIcon from "@/assets/icons/sad-face";
import TreatmentMethod from "./TreatmentMethod";
import DeleteIcon from "@/assets/icons/delete";
import Button from "@/components/button";
import VideoUploadIcon from "@/assets/icons/videoUpload";
function AddStory() {
  const [dataImg, setDataImg] = useState("");
  const [dataImg2, setDataImg2] = useState("");
  const [video, setVideo] = useState(null);
  const [sections, setSections] = useState([{ id: 1, image: null, text: "" }]);
  const [dataImgFamily, setDataImgFamily] = useState("");
  const [sectionsMethod, setSectionsMethod] = useState([
    { id: 1, image: null, text: "" },
  ]);

  const handleHeaderInputChange = (e) => {
    setDataImg(URL.createObjectURL(e[0]));
  };
  const handleHeaderInputChange2 = (e) => {
    setDataImg2(URL.createObjectURL(e[0]));
  };
  const addSection = () => {
    setSections([...sections, { id: Date.now(), image: null, text: "" }]);
  };
  const updateSection = (id, field, value) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };
  const handleHeaderInputChangeFamily = (e) => {
    setDataImgFamily(URL.createObjectURL(e[0]));
  };
  const handleVideoUpload = (files) => {
    const videoUrl = URL.createObjectURL(files[0]);
    setVideo(videoUrl);
  };
  return (
    <div className="">
      <div className="flex items-center gap-4 lg:gap-7 mb-32 relative z-10">
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.STORIES}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-[36px]"> اضافة قصة نجاح </h2>
      </div>
      <div className="flex items-center gap-9 justify-between mb-20">
        <div className="flex items-end gap-7">
          <div className="flex flex-col gap-10">
            <TextInput
              placeholder="اسم الطفل"
              classNames={{
                input:
                  "bg-grayBlueLight border-grayMedium rounded-xl h-[50px] w-[270px]",
              }}
            />
            <TextInput
              placeholder="التشخيص"
              classNames={{
                input:
                  "bg-grayBlueLight border-grayMedium rounded-xl h-[50px] w-[270px]",
              }}
            />
          </div>
          <Textarea
            placeholder="اكتب المحتوى هنا .."
            size="lg"
            radius="md"
            autosize
            minRows={4}
            classNames={{
              input:
                "min-h-[150px] w-[300px] border bg-grayBlueLight border-grayMedium ",
            }}
          />
        </div>
        <div className=" flex-1  w-auto max-w-[470px] h-[250px] relative">
          {dataImg ? (
            <div className="relative w-auto max-w-[470px] mx-auto h-[250px] flex items-center justify-center ">
              <Image
                src={dataImg}
                width={890}
                height={300}
                priority={true}
                alt={"img"}
                className="w-auto max-w-[470px] h-[250px] object-contain object-top rounded-[10px] "
              />
              <Dropzone
                maxFiles={1}
                onDrop={handleHeaderInputChange}
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
              className=" rounded-xl"
            >
              <div className="flex gap-4 py-8 flex-col justify-center w-auto max-w-[470px] h-[216px] items-center">
                <UploadImgIcon />
                <h2 className="text-base text-grayDark font-Light">
                  اضغط هنا لرفع صورة
                </h2>
              </div>
            </Dropzone>
          )}
        </div>
      </div>
      <div className="flex gap-9 justify-between mb-20">
        <div className=" flex-1  w-auto max-w-[470px] h-[350px] relative">
          {dataImg2 ? (
            <div className="relative w-auto max-w-[470px] mx-auto h-[350px] flex items-center justify-center ">
              <Image
                src={dataImg2}
                width={890}
                height={300}
                priority={true}
                alt={"img"}
                className="w-auto max-w-[470px] h-[350px] object-contain object-top rounded-[10px] "
              />
              <Dropzone
                maxFiles={1}
                onDrop={handleHeaderInputChange2}
                maxSize={5 * 1024 ** 2}
                className=" size-11 p-[2px] duration-200 hover:shadow-md hover:bg-greenMain rounded-full bg-greenMain flex items-center justify-center absolute left-1/2 -translate-x-1/2 -bottom-5"
              >
                <EditImgIcon className={"w-full h-auto flex-1"} />
              </Dropzone>
            </div>
          ) : (
            <Dropzone
              maxFiles={1}
              onDrop={handleHeaderInputChange2}
              onReject={() =>
                setLargeFile(
                  "It was rejected because of the large size of the picture "
                )
              }
              maxSize={5 * 1024 ** 2}
              className=" rounded-xl"
            >
              <div className="flex gap-4 py-8 flex-col justify-center w-auto max-w-[470px] h-[216px] items-center">
                <UploadImgIcon />
                <h2 className="text-base text-grayDark font-Light">
                  اضغط هنا لرفع صورة
                </h2>
              </div>
            </Dropzone>
          )}
        </div>
        <div className="flex-1 max-w-[530px]">
          <h3 className="text-2xl font-Bold mb-4">قبل العلاج</h3>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center gap-7">
                <div className=" relative">
                  <div className="bg-red/10 rounded-full w-[50px] h-[50px] flex p-1 items-center justify-center">
                    {section.image ? (
                      <Image
                        src={section.image}
                        width={50}
                        height={50}
                        priority={true}
                        alt="section image"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <SadFaceIcon />
                    )}
                  </div>
                  <Dropzone
                    accept={IMAGE_MIME_TYPE}
                    onDrop={(files) =>
                      updateSection(
                        section.id,
                        "image",
                        URL.createObjectURL(files[0])
                      )
                    }
                    className="w-6 h-6 min-h-6 p-1 absolute -bottom-2 -right-2 border-none flex justify-center bg-greenMain hover:bg-greenMain items-center border rounded-full"
                  >
                    <EditImgIcon className={"w-3 h-auto"} />
                  </Dropzone>
                </div>
                <Textarea
                  placeholder="اكتب هنا..."
                  radius="md"
                  autosize
                  minRows={4}
                  classNames={{
                    input:
                      "min-h-[90px] w-full border bg-grayBlueLight border-grayMedium ",
                  }}
                  className="flex-1 w-full"
                />
              </div>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                addSection();
              }}
              className="flex flex-col gap-4 duration-200 hover:shadow-md py-8 items-center justify-center w-full px-4 min-h-[150px]  bg-blueLight border border-greenMain rounded-xl font-bold"
            >
              <PlusInsideCircleIcon className={"w-11 h-auto"} />
              <p className="text-xl font-Bold text-center"> إضافة قسم</p>
            </button>
          </div>
        </div>
      </div>
      <TreatmentMethod
        sectionsMethod={sectionsMethod}
        setSectionsMethod={setSectionsMethod}
      />
      <div className="flex gap-9 justify-between mb-20">
        <div className=" flex-1  w-auto max-w-[470px] h-[350px] relative">
          {dataImg2 ? (
            <div className="relative w-auto max-w-[470px] mx-auto h-[350px] flex items-center justify-center ">
              <Image
                src={dataImg2}
                width={890}
                height={300}
                priority={true}
                alt={"img"}
                className="w-auto max-w-[470px] h-[350px] object-contain object-top rounded-[10px] "
              />
              <Dropzone
                maxFiles={1}
                onDrop={handleHeaderInputChange2}
                maxSize={5 * 1024 ** 2}
                className=" size-11 p-[2px] duration-200 hover:shadow-md hover:bg-greenMain rounded-full bg-greenMain flex items-center justify-center absolute left-1/2 -translate-x-1/2 -bottom-5"
              >
                <EditImgIcon className={"w-full h-auto flex-1"} />
              </Dropzone>
            </div>
          ) : (
            <Dropzone
              maxFiles={1}
              onDrop={handleHeaderInputChange2}
              onReject={() =>
                setLargeFile(
                  "It was rejected because of the large size of the picture "
                )
              }
              maxSize={5 * 1024 ** 2}
              className=" rounded-xl"
            >
              <div className="flex gap-4 py-8 flex-col justify-center w-auto max-w-[470px] h-[216px] items-center">
                <UploadImgIcon />
                <h2 className="text-base text-grayDark font-Light">
                  اضغط هنا لرفع صورة
                </h2>
              </div>
            </Dropzone>
          )}
        </div>
        <div className="flex-1 max-w-[530px]">
          <h3 className="text-2xl font-Bold mb-4">بعد العلاج </h3>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center gap-7">
                <div className=" relative">
                  <div className="bg-greenMain/10 rounded-full w-[50px] h-[50px] flex p-1 items-center justify-center">
                    {section.image ? (
                      <Image
                        src={section.image}
                        width={50}
                        height={50}
                        priority={true}
                        alt="section image"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <SadFaceIcon />
                    )}
                  </div>

                  <Dropzone
                    accept={IMAGE_MIME_TYPE}
                    onDrop={(files) =>
                      updateSection(
                        section.id,
                        "image",
                        URL.createObjectURL(files[0])
                      )
                    }
                    className="w-6 h-6 min-h-6 p-1 absolute -bottom-2 -right-2 border-none flex justify-center bg-greenMain hover:bg-greenMain items-center border rounded-full"
                  >
                    <EditImgIcon className={"w-3 h-auto"} />
                  </Dropzone>
                </div>
                <Textarea
                  placeholder="اكتب هنا..."
                  radius="md"
                  autosize
                  minRows={4}
                  classNames={{
                    input:
                      "min-h-[90px] w-full border bg-grayBlueLight border-grayMedium ",
                  }}
                  className="flex-1 w-full"
                />
              </div>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                addSection();
              }}
              className="flex flex-col gap-4 duration-200 hover:shadow-md py-8 items-center justify-center w-full px-4 min-h-[150px]  bg-blueLight border border-greenMain rounded-xl font-bold"
            >
              <PlusInsideCircleIcon className={"w-11 h-auto"} />
              <p className="text-xl font-Bold text-center"> إضافة قسم</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-11">
        <h3 className="text-2xl font-Bold mb-4">أضافة رأى العائلة </h3>
        <div className="flex gap-10">
          <div className="h-[188px] w-[310px]">
            {dataImgFamily ? (
              <div className="relative w-full h-full">
                <Image
                  src={dataImgFamily}
                  width={890}
                  height={300}
                  priority={true}
                  alt={"img"}
                  className=" w-full h-full object-cover rounded-[10px] "
                />
                <button
                  onClick={() => setDataImgFamily("")}
                  className=" size-7 p-1 duration-200 hover:shadow-md rounded-full bg-red/20 flex items-center justify-center absolute top-2 end-3"
                >
                  <DeleteIcon />
                </button>
              </div>
            ) : (
              <Dropzone
                maxFiles={1}
                onDrop={handleHeaderInputChangeFamily}
                maxSize={5 * 1024 ** 2}
                className="mb-10 rounded-xl"
              >
                <div className="flex gap-4 py-8 flex-col justify-center h-full w-full items-center">
                  <UploadImgIcon />
                  <h2 className="text-base text-grayDark font-Light">
                    اضغط هنا لرفع صورة
                  </h2>
                </div>
              </Dropzone>
            )}
          </div>
          <Textarea
            placeholder="اكتب هنا..."
            radius="md"
            autosize
            minRows={4}
            classNames={{
              input:
                "min-h-[188px] w-full border bg-grayBlueLight border-grayMedium ",
            }}
            className="flex-1 w-full"
          />
        </div>
      </div>
      <div>
        <div className="min-h-[290px] w-full">
          {video ? (
            <div className="relative w-full h-full">
              <video controls className="w-full h-full object-cover rounded-md">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button
                onClick={() => setVideo("")}
                className=" size-7 p-1 duration-200 hover:shadow-md rounded-full bg-red/20 flex items-center justify-center absolute top-2 end-3"
              >
                <DeleteIcon />
              </button>
            </div>
          ) : (
            <Dropzone
              maxFiles={1}
              onDrop={handleVideoUpload}
              accept={["video/mp4", "video/webm", "video/ogg"]}
              className="mb-10 rounded-xl"
            >
              <div className="flex gap-4 py-8 flex-col justify-center h-full w-full items-center">
                <VideoUploadIcon />
                <h2 className="text-base text-grayDark font-Light">
                  اضغط هنا لرفع فيديو
                </h2>
              </div>
            </Dropzone>
          )}
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
          href={ROUTES.ADMIN.SETTINGS.CONTENT.STORIES}
          className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
        >
          إلغاء
        </Link>
      </div>
    </div>
  );
}

export default AddStory;
