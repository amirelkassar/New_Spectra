import React from "react";
import HeaderInfoClient from "./components/headerInfoClient";
import DetailsAside from "./details-aside";

function layout({children}) {
  return (
    <section className="grow flex flex-col  lg:gap-6">
      <HeaderInfoClient />
      <div className="flex gap-3 flex-col lg:flex-row lg:gap-8">
        <DetailsAside />
        {children}
      </div>
    </section>
  );
}

export default layout;
