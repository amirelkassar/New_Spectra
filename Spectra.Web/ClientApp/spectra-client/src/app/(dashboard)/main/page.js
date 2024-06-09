import Cards from "./cards";
import LastAppointments from "./last-appointments";

const MainDashboardPage = () => {
  return (
    <div className="w-full flex flex-col gap-6 h-full">
      <Cards />
      <LastAppointments />
    </div>
  );
};

export default MainDashboardPage;
