import React from "react";
import CategoriesVideo from "./_components/CategoriesVideo";
import VideoCall from "./_components/videoCall";
import LayCategories from "./_components/LayCategories";
function page() {
  return (
    <div className="flex h-full flex-1">
      <div className="w-[400px] min-w-[400px] bg-white px-5">
        <LayCategories/>
      </div>
      <div className="bg-grayLight rounded-s-3xl flex-1 py-6 pe-10 ps-6">
        <div className="mb-7">
          <h2 className="tex-sm lg:text-xl mb-3 font-Bold">الاستشارى احمد محمد كمال</h2>
          <p className="tex-sm lg:text-xl font-Regular">25/5/2024
          الاثنين</p>
        </div>
        <VideoCall/>
        <CategoriesVideo />
      </div>
    </div>
  );
}

export default page;
