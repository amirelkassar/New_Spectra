import Aside from "./aside";
import DashboardHeader from "./header";

export default function DashboardLayout({ children }) {
  return (
    <main className="grid grid-cols-[230px,1fr]  px-8 py-5 gap-x-5 h-screen ">
      <Aside />
      <section className="space-y-5 h-full flex flex-col ">
        <DashboardHeader />
        <section className=" bg-[#F5F6FB] rounded-[35px] grow overflow-auto p-6 ">
          {children}
        </section>
      </section>
    </main>
  );
}
