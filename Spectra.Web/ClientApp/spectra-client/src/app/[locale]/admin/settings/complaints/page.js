'use client'
import Card from "@/components/card";
import React from "react";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import { DataTable } from "@/components/data-table";
import { Columns } from "./_components/columns";
import imgDoc from "@/assets/images/doctor.png";
import ROUTES from "@/routes";
const complaints = [
  {
    complaintNumber: "01",
    name: "أحمد عبد كمال",
    complaintType: "مدفوعات",
    date: "8/6/2024",
    status: "تم الحل",
    image: imgDoc, // Replace with the actual path if needed
  },
  {
    complaintNumber: "01",
    name: "أحمد عبد كمال",
    complaintType: "مدفوعات",
    date: "8/6/2024",
    status: "قيد المراجعة",
    image: imgDoc,
  },
  {
    complaintNumber: "01",
    name: "أحمد عبد كمال",
    complaintType: "مدفوعات",
    date: "8/6/2024",
    status: "جاري التحقيق",
    image: imgDoc,
  },
  {
    complaintNumber: "01",
    name: "أحمد عبد كمال",
    complaintType: "مدفوعات",
    date: "8/6/2024",
    status: "مرفوضة",
    image: imgDoc,
  },
  {
    complaintNumber: "01",
    name: "أحمد عبد كمال",
    complaintType: "مدفوعات",
    date: "8/6/2024",
    status: "مؤجلة",
    image: imgDoc,
  },
  {
    complaintNumber: "01",
    name: "أحمد عبد كمال",
    complaintType: "مدفوعات",
    date: "8/6/2024",
    status: "تم الحل",
    image: imgDoc,
  },
];

function page() {
  return (
    <Card>
      <div className="flex items-center gap-6 mb-8 mdl:mb-14">
        <Link href={ROUTES.ADMIN.SETTINGS.DASHBOARD} className=" size-8 mdl:size-11 rounded-full">
          <BackIcon />
        </Link>
        <h2 className="text-base mdl:text-xl font-Bold">الاعدادات - الشكاوى</h2>
      </div>
      <div>
        <DataTable IsWidth data={complaints} columns={Columns} />
      </div>
    </Card>
  );
}

export default page;
