"use client";
import React, { useState } from "react";
import imgDrugs from "@/assets/images/drugs.png";
import { Checkbox, Modal, Select, Tabs } from "@mantine/core";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import Input from "@/components/input";
import CloseIcon from "@/assets/icons/close";
import Button from "@/components/button";
import BtnAddInVideo from "@/components/btnAddInVideo";
import InputVideo from "@/components/inputVideo";
import SearchInputVideo from "@/components/searchInputVideo";
import BoxSelected from "./boxSelected";
const dataDru = [
  {
    id: 0,
    code: "#12548",
    label: "سيترالين",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 1,
    code: "#12548",
    label: "Lagerivlo",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 2,
    code: "#12548",
    label: "سيبرام",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 3,
    code: "#12548",
    label: "Avinew",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 4,
    code: "#12548",
    label: "Varivax",
    manufacturer: "رتينول",
    type: "مضاد حيوي",
    imageUrl: imgDrugs,
  },
  {
    id: 5,
    code: "#12548",
    label: "L-citrulline",
    manufacturer: "رتينول",
    type: "مسكن",
    imageUrl: imgDrugs,
  },
  {
    id: 6,
    code: "#12548",
    label: "سيبرام",
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
  const handleDeleteDrugs = (Drugs) => {
    setSelectedIndices((prevDrugs) =>
      prevDrugs.filter((item) => item !== Drugs)
    );
  };
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex flex-col gap-5 mt-5">
      <Tabs color="#10B0C1" defaultValue="one">
        <Tabs.List justify="center" classNames={{ list: "mt-3" }}>
          <Tabs.Tab
            classNames={{
              tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
            }}
            value="one"
          >
            العقاقير
          </Tabs.Tab>
          <Tabs.Tab
            classNames={{
              tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
            }}
            value="two"
          >
            العقاقير السابقة
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="one">
          <div className=" mt-4 mdl:mt-10">
            <SearchInputVideo placeholder="بحث فى العقاقير ..." />
            <BoxSelected
              data={selectedIndices}
              handleDelete={handleDeleteDrugs}
            />
          </div>
          <div className="h-full max-h-screen flex flex-col  justify-between w-full">
            <div className="flex flex-col gap-4 lgl:gap-8 mt-4 mdl:mt-5 ps-4">
              {dataDru.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 lgl:gap-4 pb-5 border-b border-grayLight"
                  >
                    <Checkbox
                      color="#10B0C1"
                      checked={selectedIndices.includes(item.label)}
                      onChange={() => handleSelect(item.label)}
                      classNames={{
                        input: "lgl:w-5 lgl:h-5 w-4 h-4",
                        inner: "lgl:w-5 lgl:h-5 w-4 h-4",
                        body: "items-center",
                      }}
                    />
                    <div className="flex flex-1 items-center justify-between gap-2 lgl:gap-3 flex-wrap">
                      <div className="flex items-center gap-2 lgl:gap-3">
                        <Image
                          alt={item.label}
                          src={item.imageUrl}
                          width={50}
                          height={50}
                          className=" size-7 lgl:size-[50px] object-cover object-top"
                        />
                        <h3 className="text-[12px] lgl:text-base font-Bold">
                          {item.label}
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
            </div>
            <Button
              variant="secondary"
              className="max-w-[294px] w-full mx-auto mb-3 mt-10"
            >
              حفظ
            </Button>
            <div className="flex items-center gap-4 mb-4 pt-4 border-t border-t-grayLight ">
              <BtnAddInVideo />
              <InputVideo
                placeholder="اضافة عقار"
                className="flex-1 mdl:me-6"
              />
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="two">
          <div className=" flex flex-col gap-3 mdl:gap-4 my-10 p-2">
            {dataDru.map((item, i) => {
              return (
                <p key={i} className=" text-xs mdl:text-base font-Bold ">
                  {item.label}
                </p>
              );
            })}
          </div>
        </Tabs.Panel>
      </Tabs>
      <Modal
        withCloseButton={false}
        opened={opened}
        centered
        classNames={{
          content: "rounded-2xl flex-1",
          inner:
            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[870px] w-full",
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
            <div className="flex items-center w-full flex-1 lgl:flex-row gap-5">
              <Input
                label="الجرعة "
                placeholder={"كمية الدواء باالميليغرام .."}
                labelClassName={
                  "text-[12px] lg:text-base font-Regular text-grayDark"
                }
                inputClassName={
                  "min-h-[44px] !h-[44px] lg:min-h-[60px] w-full border"
                }
                containerClassName={"flex-1 w-full"}
              />
              <Input
                label="عدد المرات "
                placeholder={" 3 "}
                type={"number"}
                labelClassName={
                  "text-[12px] lg:text-base font-Regular text-grayDark"
                }
                inputClassName={
                  "min-h-[44px] !h-[44px] lg:min-h-[60px] w-full border"
                }
                containerClassName={"flex-1 w-full"}
              />
              <Input
                label="مدة العلاج "
                placeholder={"اسبوعين .."}
                labelClassName={
                  "text-[12px] lg:text-base font-Regular text-grayDark"
                }
                inputClassName={
                  "min-h-[44px] !h-[44px] lg:min-h-[60px] w-full border"
                }
                containerClassName={"flex-1 w-full"}
              />
            </div>
            <Input
              label="ملاحظات "
              labelClassName={
                "text-[12px] lg:text-base font-Regular text-grayDark"
              }
              inputClassName={"min-h-[60px] border"}
            />
            <Button variant="secondary">ارسال</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Drugs;
