import ClientsTable from "./clients-table";
import ClientFilteration from "./client-filteration";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";

const PatientsPage = () => {
  return (
    <div className="default-page">
      <div className="flex items-center gap-6">
        <h2>العملاء</h2>
        <button className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold">
          <PlusInsideCircleIcon />
          إضافة عميل
        </button>
      </div>
      <ClientFilteration />
      <ClientsTable />
    </div>
  );
};

export default PatientsPage;
