import Card from "@/components/card";
import Image from "next/image";
import React from "react";
import imgBanner from "@/assets/images/adv/1.png";

function ImgPackage() {
  return (
    <Card>
      <h3 className="text-xs mdl:text-base  font-Bold mb-4 mdl:mb-12">
        صورة دعائية
      </h3>
      <div className="md:px-9">
        <Image
          src={imgBanner}
          alt="img"
          width={950}
          height={266}
          className="w-full mt-2 lgl:mt-4 mb-6 lgl:mb-9 h-[130px] mdl:h-[210px] object-contain"
        />
      </div>
    </Card>
  );
}

export default ImgPackage;
