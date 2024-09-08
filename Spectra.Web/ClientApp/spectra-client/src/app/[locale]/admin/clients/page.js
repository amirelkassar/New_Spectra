import ClientsTable from "./clients-table";
import ClientFilteration from "./client-filteration";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import AddClient from "./components/add-client";

const PatientsPage = () => {
  return (
    <div className="default-page">
      <div className="flex flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">العملاء</h2>
        <AddClient />
      </div>
      <ClientsTable />
    </div>
  );
};

export default PatientsPage;
