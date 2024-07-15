import FamilyAside from "./family-aside";

export default function FamilyLayout({ children }) {
  return (
    <section className="sec-page">
      <section className="grow flex gap-6">
        <FamilyAside />
        {children}
      </section>
    </section>
  );
}
