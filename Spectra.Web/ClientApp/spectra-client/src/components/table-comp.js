"use client";
import React from "react";
import MenuActions from "./menu-actions";
import Button from "./button";
import RecoveryIcon from "@/assets/icons/recovery";
import AcceptIcon from "@/assets/icons/accept";
import RefuseIcon from "@/assets/icons/refuse";
import Checkbox from "./checkbox";
import useMenu from "@/store/auth/signup/menu-store";

import clsx from "clsx";

function TableComponents({
  data,
  header,
  selectPage,
  setSelected,
  type,
  route,
  order,
}) {
  const { modalOneOpen, setModalOneOpen } = useMenu();

  console.log("dfdsfdsf");
  console.log(selectPage);

  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((shipmentId) => shipmentId !== id)
        : [...prev, id]
    );
  };
  console.log(header.length);
  return (
    <div className="mdl:max-h-[calc(100vh-280px)] overflow-auto grid  grid-cols-[36px,repeat(4,1fr)]    mdl:grid-cols-[22px,repeat(4,1fr)]  mdl:text-center mdl:gap-y-1">
      <div className=" contents ">
        {header.map((item, i) => {
          console.log(i);
          return (
            <div
              key={i}
              className={` ${
                i === 0
                  ? "rounded-s-xl"
                  : i === header.length - 1
                  ? "rounded-e-xl"
                  : ""
              }  bg-blueLight  py-3 px-3 sticky top-0 text-nowrap text-[12px] md:text-[16px] min-w-[98px]`}
            >
              {item}
            </div>
          );
        })}
      </div>
      {data.map((item, index) => (
        <div key={item.id} className="contents ">
          <div
            className={clsx(
              "mb-0 mdl:mb-0 row-span-1 col-span-1  mx-auto  flex items-center w-full justify-center transition text-[12px] md:text-[16px] ",
              index === data.length - 1 ? "" : "border-b border-b-grayMedium",
              selectPage.includes(item.id) ? "bg-grayLight" : "bg-transparent"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Checkbox
              id={item.id}
              checked={selectPage.includes(item.id)}
              onChange={() => toggleRow(item.id)}
              className=" bg-gray text-gray !w-4 !h-4 md:!w-[22px] md:!h-[22px]"
            />
          </div>{" "}
          {order.map((orderItem, j) => {
            return orderItem === "Req&Res" ? (
              <div
                className={clsx(
                  " flex  py-3 ps-4 pe-2 xl:ps-10 me-7 xl:me-12 content-center  items-center gap-5 justify-end transition",
                  index === data.length - 1
                    ? ""
                    : "border-b border-b-grayMedium",
                  selectPage.includes(item.id)
                    ? "bg-grayLight"
                    : "bg-transparent"
                )}
              >
                {selectPage.length > 0 ? (
                  <>
                    <MenuActions type={2} path={route} id={item.id} />
                  </>
                ) : (
                  <>
                    {type === "rejected" ? (
                      <Button
                        className={
                          "  !py-0 !px-5 font-bold items-center hidden lg:flex items-center  justify-center h-11 ring-1 !gap-4 !ring-black border-none text-[#010036]"
                        }
                      >
                        <RecoveryIcon />
                        استعادة
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          setState("accept");
                          setModalOneOpen(true);
                        }}
                        className={
                          "!py-0 !px-5 font-bold items-center hidden lg:flex items-center bg-[#10B0C1] justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
                        }
                      >
                        <AcceptIcon />
                        قبول
                      </Button>
                    )}

                    <Button
                      onClick={() => {
                        setState("req");
                        setModalOneOpen(true);
                      }}
                      className={
                        "!py-0 !px-5 hidden lg:flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none "
                      }
                    >
                      <RefuseIcon />
                      رفض
                    </Button>

                    <MenuActions type={2} path={route} id={item.id} />
                  </>
                )}
              </div>
            ) : j === order.length - 1 ? (
              <div
                className={clsx(
                  " flex  py-3 ps-4 pe-2 xl:ps-10 me-7 xl:me-12 content-center  items-center gap-5 justify-end transition",
                  index === data.length - 1
                    ? ""
                    : "border-b border-b-grayMedium",
                    selectPage.includes(item.id) ? "bg-grayLight" : "bg-transparent"
                )}
              >
                <MenuActions type={2} path={route} id={item.id} />
              </div>
            ) : (
              <div
                key={j + orderItem}
                className={clsx(
                  " items-center block gap-3 row-span-1 col-span-1 mdl:py-3 py-1 px-3  content-center   transition text-[12px] md:text-[16px]",
                  j === 0 ? "text-start" : "",
                  index === data.length - 1
                    ? ""
                    : "border-b border-b-grayMedium",
                    selectPage.includes(item.id)
                    ? "bg-grayLight"
                    : "bg-transparent"
                )}
              >
                <strong className="text-sm mdl:text-base">
                  {item[orderItem]}
                </strong>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default TableComponents;
