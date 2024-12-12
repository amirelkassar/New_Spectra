export default function FamilyLayout({ children }) {
  return (
    <section className='sec-page'>
      <section className='grow flex flex-col lg:flex-row lg:gap-6'>
        {children}
      </section>
    </section>
  );
}
