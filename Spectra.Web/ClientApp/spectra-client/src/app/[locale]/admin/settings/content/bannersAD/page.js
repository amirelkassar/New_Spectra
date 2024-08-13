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
function PFage() {
  const [dataImg, setDataImg] = useState([adImg, adImg2, adImg3]);

  const handleDeleteImage = (index) => {
    const updatedImages = dataImg.filter((_, i) => i !== index);
    setDataImg(updatedImages);
  };
  return (
    <Card>
      <h1 className="text-center my-4 mdl:my-8 text-[24px] mdl:text-[36px] font-Bold">
        البانرات الدعائية
      </h1>
      <div className="max-w-[960px] mx-auto">
        <BannerUploader setDataImg={setDataImg} dataImg={dataImg} />
        {dataImg.map((item, i) => {
          return (
            <BannerItem
              key={i}
              imageSrc={item}
              id={i}
              onDelete={() => {
                handleDeleteImage(i);
              }}
              setDataImg={setDataImg}
              dataImg={dataImg}
            />
          );
        })}

        <div className="flex flex-col items-center gap-3">
          <Button
            className="w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md"
            variant="secondary"
          >
            تأكيد
          </Button>
          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
            className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
          >
            إلغاء
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default PFage;
