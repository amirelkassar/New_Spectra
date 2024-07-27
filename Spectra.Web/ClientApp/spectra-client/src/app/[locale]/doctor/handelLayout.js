import Aside from "./aside";
import HeaderTop from "../header";
export default function HandelDashboardLayout({ Children }) {
  return (
    <>
      <HeaderTop />
      <section className="space-y-5 flex-1 h-full flex  ">
        <Aside />
        <section className=" bg-[#F5F6FB] max-w-[100%]  rounded-3xl xl:rounded-[35px] grow overflow-auto p-0 ms:p-4 lg:p-3 xl:p-6 ">
          {Children}
        </section>
      </section>
    </>
  );
}
