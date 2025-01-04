import AvatarIcon from "@/assets/icons/avatar";
import StarGoldIcon from "@/assets/icons/starGold";
import React from "react";

function Comment({comment}) {
  const getStar = (num) => {
    const stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push(<StarGoldIcon key={i} className={'w-[14px] lg:w-[18px] h-auto'}/>);
    }
    return stars;
  };
  return (
    <div className="p-4 gap-2 flex-col md:flex-row mdl:p-5 md:rounded-2xl bg-white flex md:items-end md:justify-between border-b md:border-none border-grayLight">
      <div className="flex  gap-5 mdl:gap-7 flex-1">
        <AvatarIcon className={'mt-3 size-[38px] mdl:size-[48px]'}/>
        <div className="">
          <h2 className="text-[12px] mdl:text-[16px] mb-1">{comment.name} </h2>
          <div className="mb-1 mdl:mb-5 flex items-center gap-[2px]">
            {getStar(comment.rating)}
          </div>
          <h3 className="text-[12px] mdl:text-[16px] ">{comment.title}</h3>
        </div>
      </div>
      <p className="text-[12px] text-[#808080] min-w-fit self-end">{comment.date}</p>
    </div>
  );
}

export default Comment;
