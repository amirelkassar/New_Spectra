import React from "react";
import HeaderContracts from "./components/header";


function LayContracts({ children }) {
  return (
    <section className="sec-page">
      <section className="grow flex flex-col lg:flex-row lg:gap-6">
        <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%]">
          <HeaderContracts />
          {children}
        </div>
      </section>
    </section>
  );
}

export default LayContracts;
