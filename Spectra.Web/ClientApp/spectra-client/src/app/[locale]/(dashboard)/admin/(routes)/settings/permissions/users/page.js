"use client";
import React from "react";
import LayoutPermissions from "../layoutPermissions";
import HeaderPage from "../header-page";
import ROUTES from "@/routes";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import placeholderImage from "@/assets/images/placeholder-person.png";
import useModal from "@/store/modal-slice";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "سكرتير",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    active: false,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "طبيب",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "سكرتير",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "سكرتير",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "سكرتير",
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: " طبيب",
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "طبيب",
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "طبيب",
  },
  {
    id: 8,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "طبيب",
  },
  {
    id: 10,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "طبيب",
  },
];
const FilterOptions = [
  {
    label: "طبيب",
    icon: "",
    key: "طبيب",
  },
  {
    label: "سكرتير",
    icon: "",
    key: "سكرتير",
  },
];
function UserPage() {
  const { editModal } = useModal();

  return (
    <LayoutPermissions>
      <HeaderPage
        linkBack={ROUTES.ADMIN.SETTINGS.DASHBOARD}
        title={"الاعدادات - الأذونات"}
      />
      <div className="flex items-center gap-7 flex-wrap">
        <h2 className="headTitleDash">المستخدمين</h2>
        <button
          onClick={() => {
            editModal("open", true);
            editModal("type", "addPermissionsUser");
          }}
          className="flex font-bold items-center justify-center gap-[8px] py-1 md:py-2 px-[18px] rounded-[12px] bg-[#E9F7FF] lg:h-[48px] h-[40px]"
        >
          <PlusInsideCircleIcon />
          <p className="text-[12px] md:text-[16px] font-bold"> أضافة مستخدم </p>
        </button>
      </div>
     
      <div className="grow min-h-[600px]">
        <DataTable
        IsWidth={true}
          data={data}
          columns={columns}
          filterData={FilterOptions}
          filter="buttons"
          filterBy="job"
          filterText="فلتر  بالوظيفة"
        />
      </div>
    </LayoutPermissions>
  );
}

export default UserPage;
