"use client";
import React, { useState } from "react";
import Input from "./input";
import SelectBox from "./select-box";
import Button from "./button";
import CloseModalClient from "./closeModalClient";
import ArrowRight from "@/assets/icons/arrow-right";
import { MultiSelect } from "@mantine/core";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import Image from "next/image";
import certificates from "@/assets/images/certificates.png";
import PdfIcon from "@/assets/icons/pdf";
const cites = [
  "موثقة من وزارة الصحة 1",
  " موثقة من وزارة الصحة 2",
  "موثقة من وزارة الصحة 3",
  "موثقة من وزارة الصحة 4",
  "موثقة من وزارة الصحة 5",
];
const degrees = ["دكتوراه ", "ماجيستر "];
const peice = [
  { id: 1, value: "100.00 $", name: "خدمة  الاستشارة " },
  { id: 2, value: "100.00 $", name: "خدمة الكشف المبكر " },
  { id: 3, value: "100.00 $", name: "خدمة الكشف المبكر " },
  { id: 4, value: "100.00 $", name: "خدمة الكشف المبكر " },
  { id: 5, value: "100.00 $", name: "خدمة الكشف المبكر " },
];
const startYear = 1940;
const endYear = 2030;
const yearsArray = [];
const monthsArray = [];
const daysArray = [];

for (let year = startYear; year <= endYear; year++) {
  yearsArray.push(year);
}
for (let month = 1; month <= 12; month++) {
  monthsArray.push(month);
}
for (let day = 1; day <= 31; day++) {
  daysArray.push(day);
}

function ModalJoin() {
  const [selectImg, setSelectImg] = useState([certificates, certificates]);
  const [allImg, setAllImg] = useState([]);
  const [files, setFiles] = useState([]);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const fileType = selectedFile.type;

    if (fileType.startsWith("image/")) {
      setAllImg([...allImg, selectedFile]);
    } else if (fileType === "application/pdf") {
      setFiles([...files, selectedFile]);
    } else {
      alert("Please select an image or a PDF file.");
    }
  };
  console.log(allImg);
  console.log(files);
  return (
    <div>
      <h2 className="text-center mb-4 mdl:mb-11 text-[14px] mdl:text-[20px]">
        املأ البيانات التالية لارسال طلب العرض
      </h2>
      <div>
        <form className="flex flex-col gap-5 mb-14">
          <MultiSelect
            label="التخصص"
            data={["نفسى", "اجتماعى", "طيف توحد"]}
            rightSection={<ArrowDownIcon />}
            className="MultiSelect"
          />
          <Input
            labelClassName={"text-[12px] md:text-[16px]"}
            label={"رقم الترخيص / الاعتماد"}
          />
          <Input
            labelClassName={"text-[12px] md:text-[16px]"}
            label={"مرخص / معتمد من "}
          />
          <SelectBox
            options={degrees}
            label={"الدرجة العلمية"}
            placeholder={"نوع الدرجة العلمية"}
            labelClassName={"text-[12px] md:text-[16px]"}
          />
          <SelectBox
            options={cites}
            placeholder={"الجهة الموثقة منها الدرجة العلمية"}
            labelClassName={"text-[12px] md:text-[16px]"}
          />
          <div className="flex gap-4 items-end flex-wrap flex-1 w-full">
            <SelectBox
              options={yearsArray}
              placeholder={"سنة"}
              labelClassName={"text-[12px] md:text-[16px]"}
              containerClassName={"flex-1"}
            />
            <SelectBox
              options={monthsArray}
              placeholder={"شهر"}
              labelClassName={"text-[12px] md:text-[16px]"}
              containerClassName={"flex-1"}
            />
            <SelectBox
              options={daysArray}
              placeholder={"يوم"}
              labelClassName={"text-[12px] md:text-[16px]"}
              containerClassName={"flex-1"}
            />
          </div>
          <div className="flex gap-4 items-end flex-wrap">
            <Input
              readOnly={true}
              label={"الشهادات "}
              containerClassName={"flex-1"}
              labelClassName={"text-[12px] md:text-[16px]"}
            />
            <div className="h-[56px] flex items-center justify-center gap-4 px-5 py-3 rounded-[10px] bg-greenMain w-[132px] relative cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*,application/pdf"
                className=" absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <ArrowRight />
              <p className="text-white text-[16px] font-Bold">رفع ملف</p>
            </div>
          </div>

          {allImg.length > 0 && (
            <div className="flex  gap-3 flex-wrap">
              {allImg.map((img, index) => (
                <Image
                  priority
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt={`Selected ${index}`}
                  width={102}
                  height={80}
                  className="w-auto md:h-[80px] object-cover object-top"
                />
              ))}
            </div>
          )}

          {files.length > 0 && (
            <div className="flex  gap-3 flex-wrap pt-5 border-t border-greenLight flex-col">
              {files.map((file, index) => (
                <a
                  key={index}
                  href={URL.createObjectURL(file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <PdfIcon />
                  <p>{file.name}</p>
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-7 mb-8 px-1">
            {selectImg.map((img, i) => {
              return (
                <div
                  className="md:w-[102px] md:h-[80px] h-[47px] w-[63px] "
                  key={i}
                >
                  <Image
                    src={img}
                    width={102}
                    height={80}
                    className=" h-[100%] w-[100%] object-contain"
                    alt="certificates"
                  />
                </div>
              );
            })}
          </div>
          <SelectBox
            options={peice}
            label={"الدرجة العلمية"}
            placeholder={"نوع الدرجة العلمية"}
            labelClassName={"text-[12px] md:text-[16px]"}
            optionsShow={2}
          />
        </form>
        <div className="flex items-center gap-4 md:gap-10 flex-col md:flex-row">
          <Button
            variant="secondary"
            className={
              "w-full font-bold disabled:cursor-not-allowed md:h-[60px]"
            }
          >
            ارسال
          </Button>
          <CloseModalClient />
        </div>
      </div>
    </div>
  );
}

export default ModalJoin;
