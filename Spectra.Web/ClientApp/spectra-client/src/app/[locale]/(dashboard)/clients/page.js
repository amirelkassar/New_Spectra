import ClientsTable from "./clients-table";
import ClientFilteration from "./client-filteration";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";

const PatientsPage = () => {
  return (
    <div className="default-page">
      <div className="flex flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">العملاء</h2>
        <button className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold">
          <PlusInsideCircleIcon />
          <p className=" text-[14px] md:text-[16px] font-bold">إضافة عميل</p>
        </button>
      </div>
      <ClientFilteration />
      <ClientsTable />
    </div>
  );
};

export default PatientsPage;
