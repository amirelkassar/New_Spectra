import ClientsTable from "./clients-table";
import Filteration from "./filteration";

const PatientsPage = () => {
  return (
    <div className="bg-white h-full px-12 py-5 rounded-xl flex flex-col gap-y-6">
      <h2>العملاء</h2>
      <Filteration />
      <ClientsTable />
    </div>
  );
};

export default PatientsPage;
