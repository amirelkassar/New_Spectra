"use client";
import React, { useState } from "react";
import MenuActions from "./menu-actions";
import Button from "./button";
import RecoveryIcon from "@/assets/icons/recovery";
import AcceptIcon from "@/assets/icons/accept";
import RefuseIcon from "@/assets/icons/refuse";
import Checkbox from "./checkbox";
import useMenu from "@/store/auth/signup/menu-store";

import clsx from "clsx";
import Statue from "./status";
import Image from "next/image";

function TableComponents({
  data,
  header,
  selectPage,
  setSelected,
  type,
  route,
  order,
  dataLine,
  haveImg,
  reqType,
  setState,
  hide,
  colNum = 4,
  routeClients,
  RouteFun
}) {
  const { modalOneOpen, setModalOneOpen } = useMenu();

  console.log("dfdsfdsf");
  console.log(RouteFun);
let col = hide ?colNum-1:colNum
  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((shipmentId) => shipmentId !== id)
        : [...prev, id]
    );
  };
  console.log(header.length);

  return (
    <div
      className={`  max-h-[100vh] md:h-[calc(100vh-480px)] min-h-[600px] overflow-auto grid grid-cols-[repeat(${col},minmax(min-content,1fr))] md:grid-cols-[repeat(${colNum},minmax(max-content,1fr))] gap-y-1 w-full`}
    >
      <div className=" contents ">
        {header.map((item, i) => {
          console.log(i);
          return (
            <div
              key={i}
              className={` ${
                i === 0
                  ? "rounded-s-xl"
                  : i === 1
                  ? "text-start"
                  : i === header.length - 1
                  ? "rounded-e-xl"
                  : ""
              } ${
                i === hide ? " hidden md:block" : "block"
              }   bg-blueLight h-[44px] md:h-auto  py-3 px-3 sticky top-0 text-nowrap text-[12px] md:text-[16px] min-w-[40px]`}
            >
              {item}
            </div>
          );
        })}
      </div>
      {data.map((item, index) => (
        <div key={item.id} className="contents ">
          {order.map((orderItem, j) => {
            return orderItem === "Req&Res" ? (
              <div
                className={clsx(
                  " flex  py-3 ps-4 pe-2 xl:ps-10 me-2 md:me-7 xl:me-12 content-center  items-center gap-3 lg:gap-5 justify-end transition",
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
                    <MenuActions type={type || 1} path={route} id={item.id} />
                  </>
                ) : (
                  <>
                    {reqType === "rejected" ? (
                      <Button
                        className={
                          " btnReqTable  !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex   justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-black border-none text-[#010036]"
                        }
                      >
                        <RecoveryIcon  />
                        استعادة
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          setState("accept");
                          setModalOneOpen(true);
                        }}
                        className={
                          "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex  bg-[#10B0C1] justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
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
                        "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none "
                      }
                    >
                      <RefuseIcon />
                      رفض
                    </Button>

                    <MenuActions type={type || 1} path={route} id={item.id} />
                  </>
                )}
              </div>
            ) : orderItem === "status" ? (
              <div
                className={clsx(
                  "flex gap-[10px] md:gap-[40px] py-2 md:py-5 px-3 md:px-10 content-center items-start ",
                  index === data.length - 1
                    ? ""
                    : "border-b border-b-grayMedium",
                  selectPage.includes(item.id)
                    ? "bg-grayLight"
                    : "bg-transparent"
                )}
              >
                <Statue statue={item.statu} />
                <MenuActions />
              </div>
            ) : j === order.length - 1 ? (
              <div
                className={clsx(
                  " flex  py-3 md:ps-4 md:pe-2 xl:ps-10 me-2 md:me-7 xl:me-12 content-center  items-center gap-5 justify-end transition ",
                  index === data.length - 1
                    ? ""
                    : "border-b border-b-grayMedium",
                  selectPage.includes(item.id)
                    ? "bg-grayLight"
                    : "bg-transparent"
                )}
              >
                <MenuActions type={type || 1} routeClients={routeClients} path={routeClients?RouteFun(item.id):route} id={item.id} />
              </div>
            ) : dataLine === 1 ? (
              <div
                key={j + orderItem}
                className={clsx(
                  " items-center  gap-3 row-span-1 col-span-1 mdl:py-3 py-1 px-3  content-center   transition text-[12px] md:text-[16px] min-w-40",
                  j === 0 ? "text-start" : "",
                  index === data.length - 1
                    ? ""
                    : "border-b border-b-grayMedium",
                  selectPage.includes(item.id)
                    ? "bg-grayLight"
                    : "bg-transparent",
                  j === hide - 1 ? " hidden md:flex" : "flex"
                )}
              >
              {
                j === 0 &&  <div
                className={clsx(
                  "mb-0 mdl:mb-0     flex items-center  justify-center transition text-[12px] md:text-[16px] ",
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <Checkbox
                  id={item.id}
                  checked={selectPage.includes(item.id)}
                  onChange={() => toggleRow(item.id)}
                  className=" bg-gray text-gray !w-4 !h-4 md:!w-[22px] md:!h-[22px]"
                />
              </div>
              }
                <strong className="text-sm mdl:text-base">
                  {item[orderItem]}
                </strong>
              </div>
            ) : j === 0 && haveImg ? (
              <div
                className={clsx(
                  "flex items-center gap-5 py-2 md:py-5 px-3 md:px-10 min-w-40",
                  j === 0 ? "text-start" : "",
                  index === data.length - 1
                    ? ""
                    : "border-b border-b-grayMedium",
                  selectPage.includes(item.id)
                    ? "bg-grayLight"
                    : "bg-transparent",
                  j === hide - 1 ? " hidden md:block" : "block"
                )}
              >
                <div
                  className={clsx(
                    "mb-0 mdl:mb-0    flex items-center  justify-center transition text-[12px] md:text-[16px] ",
                  
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
                <div className=" size-14 rounded-full bg-red hidden md:flex items-start justify-center overflow-hidden">
                  <Image src={item.image} alt="Doctor image" />
                </div>
                <div>
                  <p className="font-bold text-[12px] md:text-[16px]">
                    {item[orderItem[0]]}
                  </p>
                  <p className="text-[12px] md:text-[16px]">
                    {item[orderItem[1]]}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={j + orderItem}
                className={clsx(
                  " items-start block gap-3 row-span-1 col-span-1 mdl:py-3 py-1 px-3  content-center   transition text-[12px] md:text-[16px]",
                  j === 0 ? "text-start" : "",
                  index === data.length - 1
                    ? ""
                    : "border-b border-b-grayMedium",
                  selectPage.includes(item.id)
                    ? "bg-grayLight"
                    : "bg-transparent",
                  j === hide - 1 ? " hidden md:block" : "block"
                )}
              >
                <p className="font-bold text-[12px] md:text-[16px]">
                  {item[orderItem[0]]}
                </p>
                <p className="text-[12px] md:text-[16px]">
                  {item[orderItem[1]]}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default TableComponents;
