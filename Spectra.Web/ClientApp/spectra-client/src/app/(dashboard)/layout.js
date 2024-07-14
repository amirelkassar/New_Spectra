import Aside from "./aside";
import HandelDashboardLayout from "./handelLayout";

export default function DashboardLayout({ children }) {
  return (
    <main className="relative flex flex-col gap-4   px-4 xl:px-8 py-5 gap-x-5 min-h-screen ">
      <HandelDashboardLayout Children={children}/>
    </main>
  );
}
