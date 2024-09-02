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
    haveContracts:true
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    active: false,
    image: placeholderImage,
    date: "20/4/2024",
    job: "secretary",
    haveContracts:false
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "accountant",
    haveContracts:false
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "accountant",
    haveContracts:true
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "secretary",
    haveContracts:false
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: " accountant",
    haveContracts:false
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
    haveContracts:false
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
    haveContracts:false
  },
  {
    id: 8,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
    haveContracts:false
  },
  {
    id: 10,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
    haveContracts:false
  },
  {
    id: 11,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
    haveContracts:false
  },
  {
    id: 12,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "doctor ",
    haveContracts:false
  },
  {
    id: 13,
    name: "عبدالله الشيخ",
    active: true,
    image: placeholderImage,
    date: "20/4/2024",
    job: "specialist ",
    haveContracts:false
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
        IsWidth={true}
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
