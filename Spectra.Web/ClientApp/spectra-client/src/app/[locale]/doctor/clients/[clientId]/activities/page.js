import React from "react";
import ReportsNumber from "../../components/reports-number";
import LayoutClientID from "../components/layoutClientID";

function page() {
  return (
    <LayoutClientID>
      <div className="flex-1">
        <ReportsNumber title={"التقارير"} haveBack={true} />
        <div className="default-page w-full !h-auto"></div>
      </div>
    </LayoutClientID>
  );
}

export default page;
