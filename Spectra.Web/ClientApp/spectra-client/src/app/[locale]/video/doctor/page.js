"use client";
import React, { memo, useState } from "react";
import CategoriesVideo from "./_components/CategoriesVideo";
import VideoCall from "./_components/videoCall";
import LayCategories from "./_components/LayCategories";
import HeadInfoClient from "./_components/headInfoClient";
import ArrowVideoIcon from "@/assets/icons/arrowVideo";
import ArrowVideoCloseIcon from "@/assets/icons/arrowVideoClose";
const MemoizedVideoCall = memo(VideoCall);
const MemoizedHeadInfoClient = memo(HeadInfoClient);
const MemoizedLayCategories = memo(LayCategories);
function Page() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-full flex-1 pt-5  flex-col-reverse lgl:flex-row">
      <div
        className={`w-full relative flex-1 duration-300 lgl:flex-none ${
          open
            ?  " xll:w-[900px] lgl:w-[700px] xll:min-w-[900px] lgl:min-w-[700px]"
            : "lgl:w-[400px] lgl:min-w-[400px] w-full"
        }  bg-white px-5 `}
      >
        <div className=" max-h-screen absolute z-50 -end-1 cursor-pointer hidden lgl:flex items-center justify-center h-full">
          <div className=" absolute  " onClick={() => setOpen(!open)}>
            {open ? <ArrowVideoCloseIcon /> : <ArrowVideoIcon />}
          </div>
        </div>
        <MemoizedLayCategories />
      </div>

      <div className="bg-white  h-fit max-h-fit lgl:bg-grayLight max-w-full lgl:rounded-s-3xl overflow-hidden lgl:flex-1 lgl:py-6 lgl:pe-10 lgl:ps-6">
        <MemoizedHeadInfoClient />
        <MemoizedVideoCall />
        <CategoriesVideo open={open} />
      </div>
    </div>
  );
}

export default Page;
