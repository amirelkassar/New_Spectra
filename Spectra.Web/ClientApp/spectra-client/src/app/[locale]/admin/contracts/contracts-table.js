"use client";
import placeholderImage from "@/assets/images/placeholder-person.png";
import { DataTable } from "@/components/data-table";
import { columns } from "./components/columns";
import CardContacts from "./components/CardContacts";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    status: "active",
    image: placeholderImage,
    date: "20/4/2024",
    job: "accountant",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    status: "ultimate",
    image: placeholderImage,
    date: "20/4/2024",
    job: "secretary",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    status: "rejected",
    image: placeholderImage,
    date: "20/4/2024",
    job: "accountant",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    status: "manger",
    image: placeholderImage,
    date: "20/4/2024",
    job: "accountant",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    status: "admin",
    image: placeholderImage,
    date: "20/4/2024",
    job: "secretary",
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    status: "reviewed",
    image: placeholderImage,
    date: "20/4/2024",
    job: " accountant",
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    status: "ultimate",
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    status: "rejected",
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
  },
  {
    id: 8,
    name: "عبدالله الشيخ",
    status: "reviewed",
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
  },
  {
    id: 10,
    name: "عبدالله الشيخ",
    status: "manger",
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
  },
  {
    id: 11,
    name: "عبدالله الشيخ",
    status: "reviewed",
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
  },
  {
    id: 12,
    name: "عبدالله الشيخ",
    status: "rejected",
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
  },
  {
    id: 13,
    name: "عبدالله الشيخ",
    status: "admin",
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
  },
];
const FilterOptions = [
  {
    label: "نشط",
    icon: null,
    key: "active",
  },
  {
    label: "منتهى",
    icon: null,
    key: "ultimate",
  },
  {
    label: "مرفوض",
    icon: null,
    key: "rejected",
  },
  {
    label: "قيد المراجعة من رئيس القسم ",
    icon: null,
    key: "manger",
  },
  {
    label: "قيد المراجعة من  الإدارة",
    icon: null,
    key: "admin",
  },
];
const ContractsTable = () => {
  return (
    <div>
      <DataTable
        IsWidth={true}
        data={data}
        columns={columns}
        filterData={FilterOptions}
        filter="buttons"
        filterText="فلتر بالنوع"
        filterBy="status"
        haveComp
        Component={CardContacts}
      />
    </div>
  );
};

export default ContractsTable;
