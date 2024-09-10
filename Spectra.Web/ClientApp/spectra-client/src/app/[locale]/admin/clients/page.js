import ClientsTable from "./clients-table";
import AddClient from "./components/add-client";
import ActionMenu from "./components/ActionMenuPage";

const PatientsPage = () => {
  return (
    <div className="default-page">
      <div className="flex relative flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">العملاء</h2>
        <AddClient />
        <div className=" absolute top-5 end-0">
          <ActionMenu />
        </div>
      </div>
      <ClientsTable />
    </div>
  );
};

export default PatientsPage;
