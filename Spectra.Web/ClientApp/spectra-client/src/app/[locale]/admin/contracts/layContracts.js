import React from "react";
import ContractsAside from "./contracts-aside";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import ROUTES from "@/routes";
import HeaderContracts from "./components/header";
import ContractsFilteration from "./components/contracts-filteration";

function LayContracts({ children }) {
  return (
    <section className="sec-page">
      <section className="grow flex flex-col lg:flex-row lg:gap-6">
        <ContractsAside />
        <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%]">
          <HeaderContracts />
          {children}
        </div>
      </section>
    </section>
  );
}

export default LayContracts;
