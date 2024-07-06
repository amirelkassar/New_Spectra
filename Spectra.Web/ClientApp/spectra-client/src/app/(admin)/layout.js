import Aside from "./aside";
import DashboardHeader from "./header";

export default function DashboardLayout({ children }) {
  return (
    <main className="relative grid mdl:grid-cols-[110px,1fr] lg:grid-cols-[200px,1fr] px-4 xl:px-8 py-5 gap-x-5 min-h-screen ">
      <Aside />
      <section className="space-y-5 h-full flex flex-col ">
        <DashboardHeader />
        <section className=" bg-[#F5F6FB] rounded-3xl xl:rounded-[35px] grow overflow-auto p-4 xl:p-6 ">
          {children}
        </section>
      </section>
    </main>
  );
}
