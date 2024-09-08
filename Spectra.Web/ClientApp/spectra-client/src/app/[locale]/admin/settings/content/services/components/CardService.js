import React from "react";
import DeleteIcon from "@/assets/icons/delete";
import SessionIcon from "@/assets/icons/session";
import EditImgIcon from "@/assets/icons/editImg";
function CardService({data}) {
  return (
    <div className="py-3 mdl:py-3 px-3 mdl:px-4 rounded-[10px] bg-grayLight border-dashed border-2 border-green">
      <button className="size-[30px] mdl:size-[48px] rounded-[10px] border-red border flex items-center justify-center p-[6px] mdl:p-3 ">
        <DeleteIcon className={"w-full h-auto"} />
      </button>
      <div className="flex items-center justify-center flex-col gap-2 mdl:gap-5 px-2 -mt-3 mdl:-mt-6">
        <div className=" size-[54px] mdl:size-[90px] rounded-[50%] items-center flex justify-center bg-greenMain/20 p-3 mdl:p-5 relative">
          {data.icon}
          <button className=" mdl:size-[32px] size-[20px] absolute -bottom-2 start-0 p-1 flex items-center justify-center mdl:p-2 bg-greenMain rounded-[50%]">
            <EditImgIcon className={"h-full"} pathColor="white" />
          </button>
        </div>
        <h2 className="min-h-[38px] mdl:min-h-[60px]  text-center text-[12px] mdl:text-[20px] font-Bold">
        {data.title}
        </h2>
        <p className="text-center text-[12px] mdl:text-[20px] font-Regular">
        {data.dec}
        </p>
      </div>
    </div>
  );
}

export default CardService;
