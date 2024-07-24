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
import TableComponents from "@/components/table-comp";
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
  const {modal, editModal} = useMenu();
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
                onClick={()=>{setState('delete');editModal('type','delete');editModal('open',true)}}
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
               onClick={()=>{setState('accept');editModal('type','accept');editModal('open',true)}}
                className={
                  "text-[12px] lg:text-[16px] !py-0 !px-3 md:!px-5 font-bold items-center flex items-center bg-greenMain justify-center w-[80px] md:w-[120px] h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
                }
              >
                <AcceptIcon />
                قبول
              </Button>
              <Button
               onClick={()=>{setState('req');editModal('type','req');editModal('open',true)}}
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
                  item.isActive ? "bg-greenMain text-white font-bold" : ""
                }  `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <TableComponents colNum={4} setState={setState} hide={false} data={data} dataLine={1} header={['الاسم',' نوع العميل',"تاريخ الطلب",'']} order={['name','date','job','Req&Res']} selectPage={selected} setSelected={setSelected} type={1} route={ROUTES.ADMIN.REQUESTS} reqType={type} />
      
      <ModalReq state={State} GroubId={selected} numItem={selected.length}/>
    </>
  );
};

export default RequestsTable; 
