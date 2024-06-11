import ClientsTable from "./clients-table";
import ClientFilteration from "./client-filteration";

const PatientsPage = () => {
  return (
    <div className="default-page">
      <h2>العملاء</h2>
      <ClientFilteration />
      <ClientsTable />
    </div>
  );
};

export default PatientsPage;
