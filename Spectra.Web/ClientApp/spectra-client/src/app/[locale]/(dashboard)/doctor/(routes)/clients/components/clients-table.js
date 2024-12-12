"use client";
import placeholderImage from "@/assets/images/placeholder-person.png";
import { DataTable } from "@/components/data-table";
import { columns } from "./columnsClients";
const data = [
  {
    id: 0,
    doctor: "احمد محمد كمال",
    childName: "احمد عبدالله",
    date: "25/4/2024",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 1,
    doctor: "احمد محمد كمال",
    childName: "احمد عبدالله",
    date: "25/4/2024",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 2,
    doctor: "احمد محمد كمال",
    childName: "احمد عبدالله",
    date: "25/4/2024",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 3,
    doctor: "احمد محمد كمال",
    childName: "احمد عبدالله",
    date: "25/4/2024",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 4,
    doctor: "احمد محمد كمال",
    childName: "احمد عبدالله",
    date: "25/4/2024",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 5,
    doctor: "احمد محمد كمال",
    childName: "احمد عبدالله",
    date: "25/4/2024",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 6,
    doctor: "احمد محمد كمال",
    childName: "احمد عبدالله",
    date: "25/4/2024",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
  {
    id: 7,
    doctor: "احمد محمد كمال",
    childName: "احمد عبدالله",
    date: "25/4/2024",
    reportTitle: "تقرير تحليل صحي شامل",
    image: placeholderImage,
  },
];
const ClientsTable = () => {
  return (
    <div className="grow  overflow-auto ">
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default ClientsTable;
