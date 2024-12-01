"use client";
import Image from "next/image";
import Button from "@/components/button";
import DeleteIcon from "@/assets/icons/delete";
import AddReportIcon from "@/assets/icons/addReport";
export function BannerItem({
  imageSrc,
  onDelete,
  setSelectedDataImg,
  SelectedDataImg,
}) {
  return (
    <div>
      <div className="flex items-start gap-2 lgl:gap-6">
        <Button
          onClick={() => {
            onDelete();
          }}
          className={
            "text-[12px] lg:text-[16px] font-Light !py-0 px-4 flex font-bold items-center justify-center h-8 lgl:h-11 ring-1 !ring-red text-red border-none w-fit !gap-3"
          }
        >
          <DeleteIcon /> مسح
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setSelectedDataImg((prev) => [...prev, imageSrc]);
          }}
          className={
            "text-[12px] w-[160px] lg:text-xl  !py-0 px-4 flex font-bold items-center justify-center h-9 lgl:h-12   border-none  !gap-3"
          }
        >
          <AddReportIcon className={"w-6 h-auto"} /> اضافة
        </Button>
      </div>
      <Image
        src={imageSrc}
        alt="Banner image"
        priority={true}
        width={960}
        height={266}
        className="w-full mt-2 lgl:mt-4 mb-6 lgl:mb-9 h-[100px] lgl:h-[265px] object-contain"
      />
    </div>
  );
}
