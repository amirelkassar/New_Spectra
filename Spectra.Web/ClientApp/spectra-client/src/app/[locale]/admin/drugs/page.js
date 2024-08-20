import React from "react";
import Card from "@/components/card";
import AddDrugs from './_components/add-drugs'
function page() {
  return (
    <Card>
      <div className="flex flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">وصفات طبية</h2>
        <AddDrugs />
      </div>
    </Card>
  );
}

export default page;
