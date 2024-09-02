"use client";
import React, { useState } from "react";
import imgDrugs from "@/assets/images/drugs.png";
import { Checkbox, Modal, Select } from "@mantine/core";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import Input from "@/components/input";
import CloseIcon from "@/assets/icons/close";
import SelectBox from "@/components/select-box";
import Button from "@/components/button";
const dataDru = [
  {
    id: 0,
    code: "#12548",
    name: "سيترالين",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 1,
    code: "#12548",
    name: "Lagerivlo",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 2,
    code: "#12548",
    name: "سيبرام",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 3,
    code: "#12548",
    name: "Avinew",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 4,
    code: "#12548",
    name: "Varivax",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 5,
    code: "#12548",
    name: "L-citrulline",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 6,
    code: "#12548",
    name: "سيبرام",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
];
function Drugs() {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [selectedIdModal, setSelectedIdModal] = useState(0);

  const handleSelect = (index) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex flex-col gap-5 mt-5">
      {dataDru.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-2 lgl:gap-4 pb-5 border-b border-grayLight"
          >
            <Checkbox
              color="#10B0C1"
              checked={selectedIndices.includes(index)}
              onChange={() => handleSelect(index)}
              classNames={{
                input: "lgl:w-5 lgl:h-5 w-4 h-4",
                inner: "lgl:w-5 lgl:h-5 w-4 h-4",
                body: "items-center",
              }}
            />
            <div className="flex flex-1 items-center justify-between gap-2 lgl:gap-3 flex-wrap">
              <div className="flex items-center gap-2 lgl:gap-3">
                <Image
                  alt={item.name}
                  src={item.imageUrl}
                  width={50}
                  height={50}
                  className=" size-7 lgl:size-[50px] object-cover object-top"
                />
                <h3 className="text-[12px] lgl:text-base font-Bold">
                  {item.name}
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedIdModal(item.id);
                  open();
                }}
                className="px-6 py-3 w-fit rounded-xl flex items-center justify-center border text-[12px] lgl:text-base font-Bold duration-300 hover:shadow-md"
              >
                تحديد الجرعة
              </button>
            </div>
          </div>
        );
      })}
      <Modal
        withCloseButton={false}
        opened={opened}
        centered
        classNames={{
          content: "rounded-2xl flex-1",
          inner:
            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[730px]",
          body: "px-[14px] pb-[20px] pt-[20px] md:pt-[30px] md:px-[40px] md:pb-[36px]",
        }}
      >
        <div
          className=" size-[30px] mdl:size-[45px] rounded-[50%] mb-4 md:mb-6 cursor-pointer"
          onClick={() => {
            close();
          }}
        >
          <CloseIcon className={"w-[100%] h-[100%] rounded-[50%]"} />
        </div>
        <div className="-mt-14">
          <h2 className="text-sm lg:text-xl text-center mb-4 lg:mb-8 font-Bold">
            تحديد الجرعة
          </h2>
          <Image
            alt={"item"}
            src={imgDrugs}
            width={50}
            height={50}
            className=" size-[64px] lg:size-[80px] mb-5 object-contain mx-auto block"
          />
          <h3 className="text-[12px] lg:text-base text-center mb-5 font-Bold">
            سيترالين
          </h3>
          <form className="pt-5 lg:pt-8 border-t-2 border-grayLight flex flex-col gap-4 lg:gap-8 ">
            <Input
              label="وصف تحديد الجرعة "
              labelClassName={
                "text-[12px] lg:text-base font-Regular text-grayDark"
              }
              inputClassName={"min-h-[84px] border"}
            />
            <div className="flex items-center w-full flex-1 lgl:flex-row gap-5">
              <Input
                label="وصف تحديد الجرعة "
                labelClassName={
                  "text-[12px] lg:text-base font-Regular text-grayDark"
                }
                inputClassName={
                  "min-h-[44px] !h-[44px] lg:min-h-[84px] w-full border"
                }
                containerClassName={"flex-1 w-full"}
              />
              <Select
                classNames={{
                  root: "flex-1 w-full",
                  input:
                    "min-h-[44px] !h-[44px] lg:min-h-[84px] w-full border border-greenMain rounded-xl",
                  label:
                    "text-[12px] lg:text-base font-Regular text-grayDark mb-2",
                }}
                label={"الفترة الزمنية"}
                data={["عائلة طفل", "منظمه"]}
                searchable
                nothingFoundMessage="Nothing found..."
              />
            </div>
            <Input
              label="ملاحظات "
              labelClassName={
                "text-[12px] lg:text-base font-Regular text-grayDark"
              }
              inputClassName={"min-h-[84px] border"}
            />
            <Button variant="secondary">ارسال</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Drugs;
