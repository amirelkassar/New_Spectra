import React from "react";
import PatientsDetilsAside from "../components/patientDetails-aside";

import LayPatient from "./_components/layPatient";
function layout({ children }) {
  return (
    <section className="sec-page">
      <section className="grow flex flex-col  lg:gap-6">
        <LayPatient />
        <div className=" flex-1 flex lg:gap-5 flex-col lg:flex-row">
          <PatientsDetilsAside />
          {children}
        </div>
      </section>
    </section>
  );
}

export default layout;
