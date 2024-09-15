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

function EditStory() {
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
      <div className="flex items-center gap-3 lgl:gap-7 mb-6 lgl:mb-32 relative z-10">
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.STORIES}
          className=" w-[30px] lgl:w-[44px] h-[30px] lgl:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-base lgl:text-[20px]"> قصص النجاح </h2>
      </div>
      <div className="flex lgl:items-center gap-7 lgl:gap-9 lgl:justify-between  mb-14 lgl:mb-20 lgl:flex-row flex-col">
        <div className="flex lgl:items-end gap-4 md:gap-7 flex-1 flex-col md:flex-row">
          <div className="flex flex-col gap-4 md:gap-10 flex-1">
            <TextInput
              placeholder="اسم الطفل"
              classNames={{
                input:
                  "bg-grayBlueLight border-grayMedium rounded-xl h-[50px] w-full min-w-[190px] font-Bold text-lg lgl:text-2xl font-bold",
              }}
            />
            <TextInput
              placeholder="التشخيص"
              classNames={{
                input:
                  "bg-grayBlueLight border-grayMedium rounded-xl h-[50px] w-full min-w-[190px] text-sm lgl:text-lg ",
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
                "min-h-[150px] min-w-[180px] w-full border bg-grayBlueLight border-grayMedium text-[12px] lgl:text-base ",
            }}
            className="flex-1"
          />
        </div>
        <div className=" flex-1  w-auto max-w-[470px] h-[130px] lgl:h-[250px] relative lgl:min-w-[300px]">
          {dataImg ? (
            <div className="relative w-auto max-w-[470px] mx-auto h-[130px] lgl:h-[250px] flex items-center justify-center ">
              <Image
                src={dataImg}
                width={890}
                height={300}
                priority={true}
                alt={"img"}
                className="w-auto max-w-[470px] h-[130px] lgl:h-[250px] object-contain object-top rounded-[10px] "
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
              <div className="flex gap-2 lgl:gap-4 py-8 flex-col justify-center w-auto max-w-[470px] h-[130px] lgl:h-[216px] items-center">
                <UploadImgIcon />
                <h2 className="text-[12px] lgl:text-base text-grayDark font-Light">
                  اضغط هنا لرفع صورة
                </h2>
              </div>
            </Dropzone>
          )}
        </div>
      </div>
      <div className="flex gap-2 lgl:gap-9 justify-between  mb-14 lgl:mb-20">
        <div className=" flex-1  w-auto max-w-[160px] lgl:max-w-[400px] h-[240px] lgl:h-[350px] relative">
          {dataImg2 ? (
            <div className="relative w-auto max-w-[160px] lgl:max-w-[400px] mx-auto h-[240px] lgl:h-[350px] flex items-center justify-center ">
              <Image
                src={dataImg2}
                width={890}
                height={300}
                priority={true}
                alt={"img"}
                className="w-auto max-w-[160px] lgl:max-w-[400px] h-[240px] lgl:h-[350px] object-contain object-top rounded-[10px] "
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
              <div className="flex gap-4 py-8 flex-col justify-center w-auto mx-auto max-w-[150px]  lgl:max-w-[400px] h-[216px] items-center">
                <UploadImgIcon />
                <h2 className="text-[12px] lgl:text-base text-grayDark font-Light">
                  اضغط هنا لرفع صورة
                </h2>
              </div>
            </Dropzone>
          )}
        </div>
        <div className="flex-1 max-w-[530px]">
          <h3 className=" text-base lgl:text-2xl font-Bold mb-2 lgl:mb-4">
            قبل العلاج
          </h3>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="flex items-center gap-3 lgl:gap-7"
              >
                <div className=" relative">
                  <div className="bg-red/10 rounded-full w-[30px] lgl:w-[50px] h-[30px] lgl:h-[50px] flex p-[6px] items-center justify-center">
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
                    className="w-3 lgl:w-6 h-3 lgl:h-6 lgl:min-h-6 p-1 absolute -bottom-1 lgl:-bottom-2 :-right-1 lgl:-right-2 border-none flex justify-center bg-greenMain hover:bg-greenMain items-center border rounded-full"
                  >
                    <EditImgIcon className={"w-[6px] lgl:w-3 h-auto"} />
                  </Dropzone>
                </div>
                <Textarea
                  placeholder="اكتب هنا..."
                  radius="md"
                  autosize
                  minRows={4}
                  classNames={{
                    input:
                      "min-h-[66px] !h-[66px] lgl:min-h-[90px] w-full border bg-grayBlueLight border-grayMedium ",
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
              className="flex flex-col gap-2 lgl:gap-4 duration-200 hover:shadow-md py-3 lgl:py-8 items-center justify-center w-full px-4 min-h-[80px] lgl:min-h-[150px]  bg-blueLight border border-greenMain rounded-xl font-bold"
            >
              <PlusInsideCircleIcon className={"w-6 lgl:w-11 h-auto"} />
              <p className="text-sm lgl:text-xl font-Bold text-center">
                {" "}
                إضافة قسم
              </p>
            </button>
          </div>
        </div>
      </div>
      <TreatmentMethod
        sectionsMethod={sectionsMethod}
        setSectionsMethod={setSectionsMethod}
      />
      <div className="flex gap-2 lgl:gap-9 justify-between  mb-14 lgl:mb-20">
        <div className=" flex-1  w-auto max-w-[160px] lgl:max-w-[400px] h-[240px] lgl:h-[350px] relative">
          {dataImg2 ? (
            <div className="relative w-auto max-w-[160px] lgl:max-w-[400px] mx-auto h-[240px] lgl:h-[350px] flex items-center justify-center ">
              <Image
                src={dataImg2}
                width={890}
                height={300}
                priority={true}
                alt={"img"}
                className="w-auto max-w-[160px] lgl:max-w-[400px] h-[240px] lgl:h-[350px] object-contain object-top rounded-[10px] "
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
              <div className="flex gap-4 py-8 flex-col justify-center w-auto mx-auto max-w-[150px]  lgl:max-w-[400px] h-[216px] items-center">
                <UploadImgIcon />
                <h2 className="text-[12px] lgl:text-base text-grayDark font-Light">
                  اضغط هنا لرفع صورة
                </h2>
              </div>
            </Dropzone>
          )}
        </div>
        <div className="flex-1 max-w-[530px]">
          <h3 className=" text-base lgl:text-2xl font-Bold mb-4">
            بعد العلاج{" "}
          </h3>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="flex items-center gap-3 lgl:gap-7"
              >
                <div className=" relative">
                  <div className="bg-red/10 rounded-full w-[30px] lgl:w-[50px] h-[30px] lgl:h-[50px] flex p-[6px] items-center justify-center">
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
                    className="w-3 lgl:w-6 h-3 lgl:h-6 lgl:min-h-6 p-1 absolute -bottom-1 lgl:-bottom-2 :-right-1 lgl:-right-2 border-none flex justify-center bg-greenMain hover:bg-greenMain items-center border rounded-full"
                  >
                    <EditImgIcon className={"w-[6px] lgl:w-3 h-auto"} />
                  </Dropzone>
                </div>
                <Textarea
                  placeholder="اكتب هنا..."
                  radius="md"
                  autosize
                  minRows={4}
                  classNames={{
                    input:
                      "min-h-[66px] !h-[66px] lgl:min-h-[90px] w-full border bg-grayBlueLight border-grayMedium ",
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
              className="flex flex-col gap-2 lgl:gap-4 duration-200 hover:shadow-md py-3 lgl:py-8 items-center justify-center w-full px-4 min-h-[80px] lgl:min-h-[150px]  bg-blueLight border border-greenMain rounded-xl font-bold"
            >
              <PlusInsideCircleIcon className={"w-6 lgl:w-11 h-auto"} />
              <p className="text-sm lgl:text-xl font-Bold text-center">
                {" "}
                إضافة قسم
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-11">
        <h3 className="text-base lgl:text-xl font-Bold mb-7 lgl:mb-8">
          رأى العائلة{" "}
        </h3>
        <div className="flex gap-5 lgl:gap-8">
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
        </div>
      </div>
      <div>
        <div className="min-h-[290px] h-[290px] w-full">
          {video ? (
            <div className="relative w-full h-full">
              <video controls className="w-full h-full object-cover rounded-md">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button
                onClick={() => setVideo("")}
                className=" size-7 p-1 duration-200 hover:shadow-md rounded-full bg-white  flex items-center justify-center absolute top-2 end-3"
              >
                <DeleteIcon />
              </button>
            </div>
          ) : (
            <Dropzone
              maxFiles={1}
              onDrop={handleVideoUpload}
              accept={["video/mp4", "video/webm", "video/ogg"]}
              classNames={{inner:'h-full'}}
              className="h-full min-h-full rounded-xl"
            >
              <div className="flex gap-4 py-8 flex-col justify-center h-full w-full items-center">
                <VideoUploadIcon />
                <h2 className="text-[12px] lgl:text-base text-grayDark font-Light">
                  اضغط هنا لرفع فيديو
                </h2>
              </div>
            </Dropzone>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-12 lgl:mt-16 items-center gap-3 lgl:max-w-[80%] mx-auto">
        <Button
          className="w-full h-[48px] lgl:h-[60px] text-sm lgl:text-[20px] font-Bold duration-300 hover:shadow-md"
          variant="secondary"
        >
          تأكيد
        </Button>

        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.STORIES}
          className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[48px] lgl:h-[60px] text-sm lgl:text-[20px] font-Bold"
        >
          إلغاء
        </Link>
      </div>
    </div>
  );
}

export default EditStory;
