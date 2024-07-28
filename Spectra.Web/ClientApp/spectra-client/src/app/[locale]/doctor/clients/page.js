import React from "react";
import LayoutHome from "./components/layoutHome";
import AddClient from "./components/add-client";
import ClientsTable from "./components/clients-table";
import MenuActions from "@/components/menu-actions";

function page() {
  return (
    <LayoutHome>
      <div className="default-page flex-1w-[100%] lg:max-w-[calc(100%-250px)]">
        <div className="flex items-center justify-between">
          <div className="flex  mb-1 flex-wrap items-center gap-4 md:gap-6">
            <h2 className="headTitleDash">العملاء</h2>
            <AddClient />
          </div>
          <MenuActions />
        </div>
        <ClientsTable />
      </div>
    </LayoutHome>
  );
}

export default page;
