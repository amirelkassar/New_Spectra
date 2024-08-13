import React from "react";
import Comment from "./comment";
import StarWhiteIcon from "@/assets/icons/starWhite";
import Image from "next/image";
import docrotImg from "@/assets/images/placeholder-person.png";
const comments = [
  {
    id: 0,
    name: "امانى محمود",
    rating: 5,
    title: "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
    date: "11/28/2017",
  },
  {
    id: 1,
    name: "امانى محمود",
    rating: 5,
    title: "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
    date: "11/28/2017",
  },
  {
    id: 2,
    name: "امانى محمود",
    rating: 5,
    title: "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
    date: "11/28/2017",
  },
  {
    id: 3,
    name: "امانى محمود",
    rating: 5,
    title: "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
    date: "11/28/2017",
  },
  {
    id: 4,
    name: "امانى محمود",
    rating: 5,
    title: "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
    date: "11/28/2017",
  },
];
const dataDoctor = {
  name: "احمد محمد كمال",
  spec: "طبيب نفسى",
  email: "Ahmad@gmail.com",
  star: 4.9,
  rating: 281,
  image: docrotImg,
};
function RatingsPage() {
  return (
    <div className="px-0 md:px-4 lg:px-6  py-6">
      <div className="py-3 bg-white md:bg-transparent ">
        <h2 className="mb-7 mdl:text-[20px] text-[14px] ">تقييمات</h2>
        <div className="flex gap-6">
          <div className="bg-white rounded-[10px] py-8 px-9 flex items-center gap-4">
            <Image
              src={dataDoctor.image}
              width={"1px"}
              height={"100%"}
              className=" size-[128px]  object-cover rounded-[50%] object-top"
              alt="doctor"
              priority
            />
            <div>
              <div className="text-center flex flex-col justify-center items-center mb-3">
                <h2 className="mdl:text-[20px] text-[14px] font-Bold ">
                  {dataDoctor.name}
                </h2>
                <h3 className="mdl:text-[20px] text-[14px] ">
                  {dataDoctor.spec}
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <div
                  dir="ltr"
                  className=" w-fit flex gap-2 lg:gap-1 items-center justify-center py-[6px] px-2 lg:px-5 bg-greenMain text-white rounded-[10px] h-5 lg:h-[32px]  "
                >
                  <p className="font-bold text-[12px] lg:text-[18px] ">
                    {dataDoctor.star}
                  </p>

                  <StarWhiteIcon className={"w-[17px] h-[17px]"} />
                </div>
                <p className="text-[12px] "> {dataDoctor.rating} تقييم</p>
              </div>
            </div>
          </div>
          {/*TODO When merge*/}
          <div className="flex flex-1 items-center gap-6 bg-white rounded-[10px] py-8 px-9">
            <div className="w-[90px]">
              <p className="mb-7 mdl:text-[16px] text-[12px] font-Bold ">50%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 bg-white md:bg-transparent ">
        <h2 className="mb-7 mdl:text-[20px] text-[14px] ">التعليقات</h2>
        <div className="flex flex-col md:gap-4 ">
          {comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default RatingsPage;
