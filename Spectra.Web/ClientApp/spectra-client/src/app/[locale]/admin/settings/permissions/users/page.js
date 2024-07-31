"use client"
import React, { useState } from "react";
import LayoutPermissions from "../layoutPermissions";
import HeaderPage from "../header-page";
import ROUTES from "@/routes";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import TableComponents from "@/components/table-comp";
import PermissionsFilteration from './permissions-filteration'
import placeholderImage from "@/assets/images/placeholder-person.png";
import useModal from "@/store/modal-slice";

function UserPage() {
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "سكرتير",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      active:false,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "طبيب",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "سكرتير",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "سكرتير",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "سكرتير",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: " طبيب",
    },
    {
      id: 6,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 8,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "طبيب ",
    },
    {
      id: 10,
      name: "عبدالله الشيخ",
      active:true,
      image: placeholderImage,
      email:'ahmad@gmail.com',
      date: "20/4/2024",
      job: "طبيب ",
    },

  ];
  const {  modal, editModal } = useModal();

  const [selected, setSelected] = useState([]);
  const updateRoute = (id) => {
    return  ROUTES.ADMIN.SETTINGS.PERMISSIONS.PERMISSIONSUSEREDIT(id)
   };
  return (
    <LayoutPermissions>
      <HeaderPage
        linkBack={ROUTES.ADMIN.SETTINGS.DASHBOARD}
        title={"الاعدادات - الأذونات"}
      />
      <div className="flex items-center gap-7 flex-wrap">
        <h2 className="headTitleDash">المستخدمين</h2>
        <button onClick={()=>{
        editModal('open',true); editModal('type','addPermissionsUser')
      }} className="flex font-bold items-center justify-center gap-[8px] py-1 md:py-2 px-[18px] rounded-[12px] bg-[#E9F7FF] lg:h-[48px] h-[40px]">
          <PlusInsideCircleIcon />
          <p className="text-[12px] md:text-[16px] font-bold"> أضافة مستخدم </p>
        </button>
      </div>
      <PermissionsFilteration/>
      <div className="grow min-h-[600px]">
      <TableComponents
        data={data}
        colNum={5}
        hide={2}
        hide2={4}
        colNumSmall={3}
        dataLine={1}
        header={["الاسم ", 'الايميل',"الوظيفة", " تاريخ الاذن", "حالة العقد"]}
        order={["name",'email', "job", "date", ""]}
        selectPage={selected}
        setSelected={setSelected}
        type={2}
        haveImg={true}
        contracts={{open:true,type:'old',}}
        routeClients={true}
        RouteFun={updateRoute}
      />
    </div>
    </LayoutPermissions>

  );
}

export default UserPage;
