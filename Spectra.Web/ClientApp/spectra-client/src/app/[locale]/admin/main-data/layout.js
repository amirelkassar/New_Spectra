import MainDataAside from "./_components/report-aside";
import Card from "@/components/card";
export default function FamilyLayout({ children }) {


  return (
    <section className="sec-page">
      <section className="grow flex flex-col lg:flex-row lg:gap-6">
        <MainDataAside />
        <Card>{children}</Card>
      </section>
    </section>
  );
}
