import ActionMenu from "./_components/ActionMenuPage";
import AppoTable from "./appo-table";

const AppointmentsPage = () => {
  return (
    <div className="default-page relative">
      <div className="absolute top-5 end-5">
        <ActionMenu />
      </div>
      <AppoTable />
    </div>
  );
};

export default AppointmentsPage;
