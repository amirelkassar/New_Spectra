import React from "react";
import Steps from "./_components/steps";
function layout({ children }) {
  return (
    <div className="flex flex-col ">
      <Steps />
      {children}
    </div>
  );
}

export default layout;
