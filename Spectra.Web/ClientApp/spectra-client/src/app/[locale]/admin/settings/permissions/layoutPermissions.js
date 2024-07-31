import React from "react";
import PermissionsAside from "./permissions-aside";
import ModalReq from "@/components/modalReq";

function LayoutPermissions({ children }) {
  return (
    <section className="sec-page">
      <section className="grow flex flex-col lg:flex-row lg:gap-6">
        <PermissionsAside />
        <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%] lg:max-w-[calc(100%-250px)]">
          {children}
        </div>
      </section>
      <ModalReq />
    </section>
  );
}

export default LayoutPermissions;
