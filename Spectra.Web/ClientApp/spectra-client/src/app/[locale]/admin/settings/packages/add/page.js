"use client";
import React, { useState } from "react";
import HeadAdd from "./_components/HeadAdd";
import InfoPackage from "./_components/infoPackage";
import Card from "@/components/card";
import { BannerUploader } from "./_components/BannerUploader";
import Button from "@/components/button";
import GoalPackages from "./_components/goalPackages";
import ContentFlexible from "./_components/contentFlexible";
import ContentSpectra from "./_components/contentSpectra";

function Page() {
  const [switchPackages, setSwitchPackages] = useState("spectra");
  const [dataImg, setDataImg] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [listSpectra, setListSpectra] = useState([
    { id: "1", text: "خدمة الكشف المبكر" },
    { id: "2", text: "خدمة الاستشارات الفردية" },
  ]);
  const [listFlexible, setListFlexible] = useState([
    { id: "1", text: "جلسة" },
    { id: "2", text: "كشف" },
  ]);

  return (
    <div className="flex flex-col w-full gap-6">
      <HeadAdd
        switchPackages={switchPackages}
        setSwitchPackages={setSwitchPackages}
      />
      <InfoPackage />

      {switchPackages == "spectra" ? (
        <ContentSpectra list={listSpectra} setList={setListSpectra} />
      ) : (
        <ContentFlexible list={listFlexible} setList={setListFlexible} />
      )}
      {switchPackages == "spectra" && (
        <GoalPackages
          inputValue={inputValue}
          setInputValue={setInputValue}
          list={list}
          setList={setList}
        />
      )}

      <Card>
        <h3 className="text-xs mdl:text-base font-Regular mb-4 mdl:mb-12">صورة دعائية </h3>
        <div className="md:px-9">
          <BannerUploader dataImg={dataImg} setDataImg={setDataImg} />
        </div>
        <div className="flex flex-col mt-7 mdl:mt-14 mb-2 mdl:mb-9 mx-auto md:max-w-[84%] items-center gap-3">
          <Button
            className="w-full h-[48px] lgl:h-[60px] text-[14px] lgl:text-[20px] font-Bold duration-300 hover:shadow-md"
            variant="secondary"
          >
            حفظ
          </Button>
          <Button
           
            className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[48px] lgl:h-[60px] text-[14px] lgl:text-[20px] font-Bold"
          >
            عرض
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Page;
