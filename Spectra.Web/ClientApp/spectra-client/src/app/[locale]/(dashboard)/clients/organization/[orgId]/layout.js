import OrgAside from "./org-aside";

export default function OrganizationLayout({ children }) {
  return (
    <section className="sec-page">
      <section className="grow flex flex-col lg:flex-row lg:gap-6">
        <OrgAside />
        {children}
      </section>
    </section>
  );
}
