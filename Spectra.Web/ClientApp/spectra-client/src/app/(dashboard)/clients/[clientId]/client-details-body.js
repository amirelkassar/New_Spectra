import clsx from "clsx";
import React from "react";

const ClientDetailsBody = () => {
  const data = {
    details: {
      name: "عبدالله الشيخ",
      email: "Abdallah@gmail.com",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
      diagnosis: "اضطراب طيف التوحد",
    },
    today: [
      {
        id: 0,
        type: "كشف 1",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "الطبيب: احمد محمد كمال",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
    ],
  };
  return (
    <div className="grow   bg-white rounded-xl p-8">
      <h2 className="ms-5 mb-5">مواعيد اليوم</h2>
      <div className="grid grid-cols-4 w-full max-h-[calc(100vh-440px)] overflow-auto">
        {data.today.map((item, index) => (
          <div key={item.id} className="contents">
            <div
              className={clsx(
                "text-xl py-5 ",
                index !== data.today.length - 1 && "border-b  border-grayMedium"
              )}
            >
              {item.type}
            </div>
            <div
              className={clsx(
                "text-xl py-3",
                index !== data.today.length - 1 && "border-b  border-grayMedium"
              )}
            >
              {item.date}
            </div>
            <div
              className={clsx(
                "text-xl py-3",
                index !== data.today.length - 1 && "border-b  border-grayMedium"
              )}
            >
              {item.time}
            </div>
            <div
              className={clsx(
                "text-xl py-3 me-5",
                index !== data.today.length - 1 && "border-b  border-grayMedium"
              )}
            >
              {item.doctor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDetailsBody;
