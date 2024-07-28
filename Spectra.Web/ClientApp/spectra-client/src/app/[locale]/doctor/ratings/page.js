import React from "react";
import Comment from "./comment";

function RatingsPage() {
  const comments = [
    {
      id: 0,
      name: "امانى محمود",
      rating: 5,
      title:
        "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
      date: "11/28/2017",
    },
    {
      id: 1,
      name: "امانى محمود",
      rating: 5,
      title:
        "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
      date: "11/28/2017",
    },
    {
      id: 2,
      name: "امانى محمود",
      rating: 5,
      title:
        "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
      date: "11/28/2017",
    },
    {
      id: 3,
      name: "امانى محمود",
      rating: 5,
      title:
        "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
      date: "11/28/2017",
    },
    {
      id: 4,
      name: "امانى محمود",
      rating: 5,
      title:
        "لقد كانت تجربتى مع الدكتور احمد محمد جدا رائعة ومميزة بالتوفيق الك",
      date: "11/28/2017",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="mb-7 mdl:text-[20px] text-[14px] ">التعليقات</h2>
        <div className="flex flex-col md:gap-4">
          {comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default RatingsPage;
