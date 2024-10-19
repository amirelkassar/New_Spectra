import FamilyAside from "./family-aside";

export default function FamilyLayout({ children,params }) {
  console.log('****************');
  console.log( params);
  console.log('****************');

  return (
    <section className="sec-page">
      <section className="grow flex flex-col lg:flex-row lg:gap-6">
        <FamilyAside />
        {children}
      </section>
    </section>
  );
}
