import ROUTES from "@/routes";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const RequestsTable = () => {
  const data = [
    {
      id: 0,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 2,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 2,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 3,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 4,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 5,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 6,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 7,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 8,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 9,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 10,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
  ];
  return (
    <>
      <h2 className="ms-5">طلبات الاشتراك</h2>
      <div className="max-h-[calc(100vh-300px)] overflow-auto grid grid-cols-3 text-center gap-y-1">
        <div className="contents ">
          <div className="bg-blueLight rounded-s-xl py-3 pe-10 ps-8 sticky top-0">
            الاسم
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0">
            نوع المستخدم
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 rounded-e-xl me-12"></div>
        </div>
        {data.map((item, index) => (
          <div key={item.id} className="contents ">
            <div
              className={clsx(
                "py-3 ms-8 font-bold content-center",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.name}
            </div>
            <div
              className={clsx(
                "py-3 px-10 content-center",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              <p>{item.job}</p>
              <p> {item.date}</p>
            </div>
            <div
              className={clsx(
                "py-3 px-10 me-14 content-center",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              <Link
                href={`${ROUTES.ADMIN.REQUESTS}/${item.id}`}
                className={
                  "border border-greenMain rounded-full block py-2 text-greenMain font-bold w-36 "
                }
                variant="ternary"
              >
                إدارة
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RequestsTable;
