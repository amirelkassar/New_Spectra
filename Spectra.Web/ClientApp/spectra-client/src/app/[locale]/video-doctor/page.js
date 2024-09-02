import React from "react";
import CategoriesVideo from "./_components/CategoriesVideo";
import VideoCall from "./_components/videoCall";
import LayCategories from "./_components/LayCategories";
function page() {
  return (
    <div className="flex h-full flex-1  flex-col-reverse lgl:flex-row">
      <div className="w-full flex-1 lgl:flex-none  lgl:w-[400px] lgl:min-w-[400px] bg-white px-5">
        <LayCategories/>
      </div>
      <div className="bg-white  h-fit max-h-fit lgl:bg-grayLight max-w-full lgl:rounded-s-3xl overflow-hidden lgl:flex-1 lgl:py-6 lgl:pe-10 lgl:ps-6">
        <div className="mb-7 hidden lgl:block">
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
