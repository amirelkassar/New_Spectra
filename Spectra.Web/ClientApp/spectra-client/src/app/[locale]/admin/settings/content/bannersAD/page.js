"use client";
import Card from "@/components/card";
import React, { useState } from "react";
import { BannerUploader } from "./_components/BannerUploader";
import { BannerItem } from "./_components/BannerItem";
import Button from "@/components/button";
import adImg from "@/assets/images/adv/1.png";
import adImg2 from "@/assets/images/adv/2.png";
import adImg3 from "@/assets/images/adv/3.png";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import BackIcon from "@/assets/icons/back";
import Image from "next/image";
import CloseIcon from "@/assets/icons/close";
function PFage() {
  const [dataImg, setDataImg] = useState([adImg, adImg2, adImg3]);
  const [SelectedDataImg, setSelectedDataImg] = useState([]);
  console.log(SelectedDataImg);

  const handleDeleteImage = (index) => {
    const updatedImages = dataImg.filter((_, i) => i !== index);
    setDataImg(updatedImages);
  };
  return (
    <div className="flex flex-col gap-10">
      <Card>
        <div className="flex items-center mb-7 lgl:mb-14 gap-2 lg:gap-3">
          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="text-base lg:text-[20px] font-bold ">
            {" "}
            البانرات الدعائية
          </h2>
        </div>
        <div className="max-w-[960px] mx-auto">
          <BannerUploader setDataImg={setDataImg} dataImg={dataImg} />
        </div>
      </Card>
      <Card>
        <div>
          <h3 className="text-base mdl:text-2xl font-Regular mb-6 mdl:mb-10 mt-2 mx-2">
            يمكنك اختيار اكثر من بانر دعائى للعرض
          </h3>

          <div className="flex gap-2 flex-wrap mb-16">
            {SelectedDataImg.map((item, i) => {
              return (
                <div className="max-w-full w-[286px] relative" key={i}>
                  <button className=" absolute top-1 start-1 ">
                    <CloseIcon className={'w-4 h-auto'}/>
                  </button>
                  <Image
                    src={item}
                    alt="gg"
                    height={80}
                    width={300}
                    className="h-20 w-full object-contain"
                  />
                </div>
              );
            })}
          </div>

          <div className="max-w-[960px] mx-auto">
            {dataImg.map((item, i) => {
              return (
                <BannerItem
                  key={i}
                  imageSrc={item}
                  id={i}
                  onDelete={() => {
                    handleDeleteImage(i);
                  }}
                  setSelectedDataImg={setSelectedDataImg}
                  SelectedDataImg={SelectedDataImg}
                  setDataImg={setDataImg}
                  dataImg={dataImg}
                />
              );
            })}
            <div className="flex flex-col items-center gap-3">
              <Button
                className="w-full h-[48px] lgl:h-[60px] text-[14px] lgl:text-[20px] font-Bold duration-300 hover:shadow-md"
                variant="secondary"
              >
                تأكيد
              </Button>
              <Link
                href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
                className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[48px] lgl:h-[60px] text-[14px] lgl:text-[20px] font-Bold"
              >
                إلغاء
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PFage;
