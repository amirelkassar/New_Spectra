"use client";
import placeholderImage from "@/assets/images/placeholder-person.png";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "accountant",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    active: false,
    image: placeholderImage,
    date: "20/4/2024",
    job: "secretary",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "accountant",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "accountant",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "secretary",
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: " accountant",
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
  },
  {
    id: 8,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
  },
  {
    id: 10,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
  },
  {
    id: 11,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
  },
  {
    id: 12,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
  },
  {
    id: 13,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
  },
];
const FilterOptions = [
  {
    label: "طبيب",
    icon: null,
    key: "doctor",
  },
  {
    label: "مختص",
    icon: null,
    key: "specialist",
  },
  {
    label: "محاسب",
    icon: null,
    key: "accountant",
  },
  {
    label: "سكرتير",
    icon: null,
    key: "secretary",
  },
];
const NewContractsTable = () => {
  return (
    <div className="grow min-h-[600px]">
      <DataTable
        data={data}
        columns={columns}
        filterData={FilterOptions}
        filter="buttons"
        filterText="فلتر بالنوع"
        filterBy="job"
      />
    </div>
  );
};

export default NewContractsTable;
