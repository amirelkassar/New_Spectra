import React from "react";
import ClientsAside from "./clients-aside";

function LayoutHome({ children }) {
  return (
    <div className="flex mdl:gap-5 flex-wrap flex-col mdl:flex-row">
      <ClientsAside />
      {children}
    </div>
  );
}

export default LayoutHome;
