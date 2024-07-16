"use client";
import AcceptIcon from "@/assets/icons/accept";
import BackIcon from "@/assets/icons/back";
import DeleteIcon from "@/assets/icons/delete";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import RecoveryIcon from "@/assets/icons/recovery";
import RefuseIcon from "@/assets/icons/refuse";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import MenuActions from "@/components/menu-actions";
import ModalReq from "@/components/modalReq";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import useMenu from "@/store/auth/signup/menu-store";
import clsx from "clsx";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

const RequestsTable = ({ type }) => {
  const path = usePathname();
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
  const SubscriptionLinks = [
    {
      name: "الطلبات الجديدة",
      route: ROUTES.ADMIN.REQUESTSNEW,
      isActive: path.includes(ROUTES.ADMIN.REQUESTSNEW),
      type: "new",
    },
    {
      name: "الطلبات المرفوضة ",
      route: ROUTES.ADMIN.REQUESTSREJECTED,
      isActive: path.includes(ROUTES.ADMIN.REQUESTSREJECTED),
      type: "rejected",
    },
  ];
  const {modalOneOpen,setModalOneOpen} = useMenu();
  const [State,setState] = useState('accept');

  return (
    <>
      <div className=" block">
        <div className="headerRequests flex justify-between items-start gap-3 flex-wrap">
          <h2 className=" headTitleDash hidden sm:block">
            {type === "all"
              ? " طلبات الاشتراك"
              : type === "new"
              ? "  طلبات الاشتراك الجديدة"
              : " طلبات الاشتراك المرفوضة "}
          </h2>
          <h2 className=" headTitleDash sm:hidden flex justify-center items-center gap-3">
            {type !== "all" ? (
              <>
                <Link
                  href={ROUTES.ADMIN.REQUESTS}
                  className="p-2 w-[30px] h-[30px] rounded-[50%] bg-[#E9F7FF]"
                >
                  <BackIcon />
                </Link>
              </>
            ) : null}
            {type === "all"
              ? " طلبات الاشتراك"
              : type === "new"
              ? "  طلبات الاشتراك "
              : " طلبات الاشتراك  "}
          </h2>
          <div className="flex items-center gap-3">
            {isAllSelected() ? (
              <Button
                onClick={() => handleCheckAll(false)}
                className="px-[14px] py-[7px]  text-nowrap h-9 w-[86px] md:w-[120px] min-w-max text-[12px] font-bold rounded-[10px] !ring-[#010036]"
              >
                الغاء التحديد
              </Button>
            ) : (
              <Button
                onClick={() => handleCheckAll(true)}
                className="px-[14px] py-[7px]  text-nowrap h-9 w-[86px] md:w-[120px] min-w-max text-[12px] font-bold rounded-[10px] !ring-[#010036]"
              >
                تحديد الكل
              </Button>
            )}

            <div className="w-3">
              <MenuActions type={2} />
            </div>
          </div>
        </div>
        <div className="BtnheaderRequests px-1">
          {selected.length > 0 ? (
            <div className="flex flex-wrap items-center justify-start gap-3 md:gap-5 mt-5 md:mt-8 mb-6 md:mb-10">
              <Button
                onClick={()=>{setState('delete');setModalOneOpen(true)}}
                className={
                  "text-[12px] lg:text-[16px] !py-0 !px-3 md:!px-5 flex font-bold items-center justify-center h-11 ring-1 !ring-[#F5F5F5] text-red border-none w-[80px] md:w-[120px] !gap-[8px]"
                }
              >
                <DeleteIcon /> مسح
              </Button>
              <Button
                className={
                  "text-[12px] lg:text-[16px] !py-0 !px-3 md:!px-5 flex font-bold items-center justify-center h-11 ring-1 !ring-[#F5F5F5]  text-[#010036] border-none w-[80px] md:w-[120px] !gap-[8px]"
                }
              >
                <ExportIcon />
                تصدير
              </Button>
              <Button
                className={
                  "text-[12px] lg:text-[16px] !py-0 !px-3 md:!px-5 flex font-bold items-center justify-center h-11 ring-1 !ring-[#F5F5F5]  text-[#010036] border-none w-[80px] md:w-[120px] !gap-[8px]"
                }
              >
                <PrintIcon />
                طباعة
              </Button>
              <Button
               onClick={()=>{setState('accept');setModalOneOpen(true)}}
                className={
                  "text-[12px] lg:text-[16px] !py-0 !px-3 md:!px-5 font-bold items-center flex items-center bg-[#10B0C1] justify-center w-[80px] md:w-[120px] h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
                }
              >
                <AcceptIcon />
                قبول
              </Button>
              <Button
               onClick={()=>{setState('req');setModalOneOpen(true)}}
                className={
                  "text-[12px] lg:text-[16px] !py-0 !px-3 md:!px-5 flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none w-[80px] md:w-[120px] !gap-[8px]"
                }
              >
                <RefuseIcon />
                رفض
              </Button>
            </div>
          ) : null}
        </div>
        <div className=" lg:hidden linksReqMob flex items-center max-w-[96%] w-[400px] justify-between mx-auto gap-[20px] flex-wrap mt-8">
          {type === "all" ? null : (
            <Link
              key={ROUTES.ADMIN.REQUESTS}
              href={ROUTES.ADMIN.REQUESTS}
              className="text-[12px] py-[9px] px-[12px] rounded-[10px] "
            >
              الكل
            </Link>
          )}
          {SubscriptionLinks.map((item) => {
            return (
              <Link
                key={item.route}
                href={item.route}
                className={`text-[12px] py-[9px] px-[12px] rounded-[10px] ${
                  item.isActive ? "bg-[#10B0C1] text-white font-bold" : ""
                }  `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mdl:max-h-[calc(100vh-280px)] overflow-auto grid  grid-cols-[36px,repeat(4,1fr)]    mdl:grid-cols-[22px,repeat(4,1fr)]  mdl:text-center mdl:gap-y-1">
        <div className=" contents ">
          <div className="bg-blueLight text-center rounded-s-xl w-full flex items-center justify-center sticky top-0"></div>
          <div className="bg-blueLight  py-3 px-3 sticky top-0 text-nowrap text-[12px] md:text-[16px] min-w-[98px]">
            الاسم
          </div>
          <div className="bg-blueLight py-3 px-3 xl:px-10 sticky top-0 text-nowrap text-[12px] md:text-[16px]">
            نوع العميل
          </div>{" "}
          <div className="bg-blueLight py-3 px-3 xl:px-10 sticky top-0 text-nowrap text-[12px] md:text-[16px]">
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
                "mb-0 mdl:mb-0 row-span-1 col-span-1  mx-auto  flex items-center w-full justify-center transition text-[12px] md:text-[16px] ",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <Checkbox
                id={item.id}
                checked={selected.includes(item.id)}
                onChange={() => toggleRow(item.id)}
                className=" bg-gray text-gray !w-4 !h-4 md:!w-[22px] md:!h-[22px]"
              />
            </div>{" "}
            <div
              className={clsx(
                " items-center block gap-3 row-span-1 col-span-1 mdl:py-3 py-1  content-center  transition text-[12px] md:text-[16px]",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
            >
              <strong className="text-sm mdl:text-base">{item.name}</strong>
            </div>
            <div
              className={clsx(
                " items-center text-center block gap-3 row-span-1 col-span-1 mdl:py-3 py-1 mdl:px-3 xl:px-10 content-center transition text-[12px] md:text-[16px]",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
            >
              {" "}
              <p>{item.job}</p>
            </div>{" "}
            <div
              className={clsx(
                "mb-0 mdl:mb-0 text-center  items-center block gap-3 row-span-1 col-span-1 mdl:py-3 py-1 mdl:px-3 xl:px-10  content-center  transition text-[12px] md:text-[16px]",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
            >
              {" "}
              <p> {item.date}</p>
            </div>
            <div
              className={clsx(
                " flex  py-3 ps-4 pe-2 xl:ps-10 me-7 xl:me-12 content-center  items-center gap-5 justify-end transition",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium",
                selected.includes(item.id) ? "bg-grayLight" : "bg-transparent"
              )}
            >
              {selected.length > 0 ? (
                <>
                  <MenuActions
                    type={2}
                    path={ROUTES.ADMIN.REQUESTS}
                    id={item.id}
                  />
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
                    onClick={()=>{setState('accept');setModalOneOpen(true)}}
                      className={
                        "!py-0 !px-5 font-bold items-center hidden lg:flex items-center bg-[#10B0C1] justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
                      }
                    >
                      <AcceptIcon />
                      قبول
                    </Button>
                  )}

                  <Button
                    onClick={()=>{setState('req');setModalOneOpen(true)}}
                    className={
                      "!py-0 !px-5 hidden lg:flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none "
                    }
                  >
                    <RefuseIcon />
                    رفض
                  </Button>

                  <MenuActions
                    type={2}
                    path={ROUTES.ADMIN.REQUESTS}
                    id={item.id}
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <ModalReq state={State} GroubId={selected} numItem={selected.length}/>
    </>
  );
};

export default RequestsTable;
