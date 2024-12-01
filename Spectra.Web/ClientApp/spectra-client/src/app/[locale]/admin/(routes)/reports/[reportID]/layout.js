export default function FamilyLayout({ children, params }) {
  return (
    <section className="sec-page">
      <section className="grow flex flex-col lg:flex-row lg:gap-6">
        {children}
      </section>
    </section>
  );
}
