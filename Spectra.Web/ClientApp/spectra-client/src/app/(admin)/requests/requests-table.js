"use client";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import MenuActions from "@/components/menu-actions";
import ROUTES from "@/routes";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RequestsTable = () => {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((shipmentId) => shipmentId !== id)
        : [...prev, id]
    );
  };

  const data = [
    {
      id: 0,
      name: "احمد محمد كمال",
      job: "طبيب",
      date: "22/5/2024",
    },
    {
      id: 1,
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

  const reset = () => {
    setSelected([]);
  };

  const handleCheckAll = (isChecked) => {
    data.forEach((row) => {
      if (isChecked && !selected.includes(row.id)) {
        toggleRow(row.id);
      } else if (!isChecked) {
        reset();
      }
    });
  };

  const isAllSelected = () => {
    return data.every((row) => selected.includes(row.id));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="ms-5">طلبات الاشتراك</h2>
        <div className="flex items-center gap-3">
          {isAllSelected() ? (
            <button onClick={() => handleCheckAll(false)} className="underline">
              إلغاء تحديد الكل
            </button>
          ) : (
            <button onClick={() => handleCheckAll(true)} className="underline">
              تحديد الكل
            </button>
          )}

          <div className="w-3">{selected.length > 0 && <MenuActions />}</div>
        </div>
      </div>
      <div className="mdl:max-h-[calc(100vh-280px)] overflow-auto grid grid-cols-3  mdl:grid-rows-[max-content] mdl:grid-cols-[48px,repeat(4,1fr)]  mdl:text-center mdl:gap-y-1">
        <div className="hidden mdl:contents ">
          <div className="bg-blueLight text-center rounded-s-xl w-full flex items-center justify-center sticky top-0"></div>
          <div className="bg-blueLight  py-3 px-3 sticky top-0">الاسم</div>
          <div className="bg-blueLight py-3 px-3 xl:px-10 sticky top-0">
            نوع المستخدم
          </div>{" "}
          <div className="bg-blueLight py-3 px-3 xl:px-10 sticky top-0">
            تاريخ الطلب
          </div>
          <div
            className="bg-blueLight py-3 px-3
           xl:px-10 sticky top-0 rounded-e-xl me-6 xl:me-12"
          ></div>
        </div>
        {data.map((item, index) => (
          <div key={item.id} className="contents ">
            <div
              className={clsx(
                "mb-1 mdl:mb-0 row-span-3 col-span-1 mdl:row-span-1 mx-auto w-full flex items-center justify-center transition ",
                index === data.length - 1
                  ? ""
                  : "border-b border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <Checkbox
                id={item.id}
                checked={selected.includes(item.id)}
                onChange={() => toggleRow(item.id)}
                className=" bg-gray text-gray"
              />
            </div>{" "}
            <div
              className={clsx(
                "flex items-center mdl:block gap-3 row-span-1 col-span-2 mdl:col-span-1 mdl:py-3 py-1  mdl:content-center  transition",
                index === data.length - 1
                  ? ""
                  : "mdl:border-b mdl:border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
            >
              <p className="mdl:hidden text-sm w-[80px]">الاسم</p>
              <strong className="text-sm mdl:text-base">{item.name}</strong>
            </div>
            <div
              className={clsx(
                "flex items-center mdl:block gap-3 row-span-1 col-span-2 mdl:col-span-1 mdl:py-3 py-1 mdl:px-3 xl:px-10 mdl:content-center transition",
                index === data.length - 1
                  ? ""
                  : "mdl:border-b mdl:border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
            >
              {" "}
              <p className="mdl:hidden text-sm w-[80px]">نوع المستخدم</p>
              <p>{item.job}</p>
            </div>{" "}
            <div
              className={clsx(
                "mb-1 mdl:mb-0 flex items-center mdl:block gap-3 row-span-1 col-span-2 mdl:col-span-1 mdl:py-3 py-1 mdl:px-3 xl:px-10  mdl:content-center  transition",
                index === data.length - 1
                  ? ""
                  : "border-b border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
            >
              {" "}
              <p className="mdl:hidden text-sm w-[80px]">تاريخ الطلب</p>
              <p> {item.date}</p>
            </div>
            <div
              className={clsx(
                "hidden mdl:flex  py-3 ps-4 pe-2 xl:ps-10 me-7 xl:me-12 content-center  items-center gap-5 justify-end transition",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
            >
              {selected.includes(item.id) ? (
                <>
                  <Button
                    className={
                      "!py-0 !px-5 flex items-center justify-center h-10 ring-2 ring-greenMain border-none text-greenMain"
                    }
                  >
                    قبول
                  </Button>
                  <Button
                    className={
                      "!py-0 !px-5 flex items-center justify-center h-10 ring-2 !ring-red text-red border-none "
                    }
                  >
                    رفض
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href={`${ROUTES.ADMIN.REQUESTS}/${item.id}`}
                    className={
                      "border-2 border-black rounded-2xl  h-10 flex items-center justify-center text-black font-bold w-24 xl:w-36 shrink-0 "
                    }
                    variant="ternary"
                  >
                    عرض
                  </Link>
                  <MenuActions />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RequestsTable;
