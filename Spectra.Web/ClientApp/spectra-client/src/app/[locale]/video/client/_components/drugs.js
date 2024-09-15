import React from "react";
import MenuActions from "@/components/menu-actions";
import DocumentIcon from "@/assets/icons/document";
import { Accordion } from "@mantine/core";
import Image from "next/image";
import imgDrugs from "@/assets/images/drugs.png";
import ArrowAccordionIcon from "@/assets/icons/arrowAccordion";
const files = [
  {
    id: 0,
    name: "File Title.Document",
    date: "313 KB . 31 Aug, 2022  ",
    nameDru: "سيترالين",
    imageUrl: imgDrugs,
    describe: "سيتم اخذ الجرعة يوميا  على فترتين كل 12 ساعة لمدة اسبوعين",
    number: "2",
    time: "12 ساعة",
    nots: "مراجعة الطبيب فى حالة ظهور اثار جانبية شديدة",
  },
  {
    id: 1,
    name: "File Title.Document",
    date: "313 KB . 31 Aug, 2022  ",
    nameDru: "سيترالين",
    imageUrl: imgDrugs,
    describe: "سيتم اخذ الجرعة يوميا  على فترتين كل 12 ساعة لمدة اسبوعين",
    number: "2",
    time: "12 ساعة",
    nots: "مراجعة الطبيب فى حالة ظهور اثار جانبية شديدة",
  },
];

function Drugs() {
  const items = files.map((item) => (
    <Accordion.Item key={item.id} value={item.id.toString()}>
      <Accordion.Control icon={item.emoji} className="px-0">
        <div className="flex items-center gap-5">
          <DocumentIcon />
          <div>
            <h3 className="text-sm lg:text-lg ">{item.name}</h3>
            <p className=" text-[12px] lg:text-sm font-Regular text-[#71839B]">
              {item.date}
            </p>
          </div>
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        {" "}
        <div className="flex flex-col  gap-4 pt-7 px-3 py-6 shadow-lg rounded-xl">
          <div className="flex items-center gap-3 border-b border-grayLight pb-4">
            <Image
              src={item.imageUrl}
              alt={item.name}
              className="w-12 lg:w-16 h-auto"
            />
            <h3 className="text-sm lg:text-base font-bold">{item.nameDru}</h3>
          </div>
          <div className=" border-b border-grayLight pb-4">
            <h4 className="text-sm lg:text-base font-regular mb-2 text-grayDark">
              وصف تحديد الجرعة
            </h4>
            <p className="text-sm lg:text-base font-Regular">{item.describe}</p>
          </div>
          <div className=" border-b border-grayLight pb-4">
            <h4 className="text-sm lg:text-base font-regular mb-2 text-grayDark">
              عدد الجرعات
            </h4>
            <p className="text-sm lg:text-base font-Regular">{item.number}</p>
          </div>
          <div className=" border-b border-grayLight pb-4">
            <h4 className="text-sm lg:text-base font-regular mb-2 text-grayDark">
              الفترة الزمنية
            </h4>
            <p className="text-sm lg:text-base font-Regular">{item.time}</p>
          </div>
          <div className=" ">
            <h4 className="text-sm lg:text-base font-regular mb-2 text-grayDark">
            ملاحظات
            </h4>
            <p className="text-sm lg:text-base font-Regular">{item.nots}</p>
          </div>
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className="flex flex-col gap-5 mt-5">
      <Accordion chevron={<ArrowAccordionIcon />}>{items}</Accordion>
    </div>
  );
}

export default Drugs;
