import React from "react";
import BankAccounts from "./bank-accounts";
import BankTransfers from "./bank-transfers";

function page() {
  return (
    <div className="px-0 md:px-4 lg:px-6  py-6">
      <h2 className="mb-6 text-[14px] mdl:text-[20px] font-Bold">المحفظة</h2>
      <div className="flex gap-7 flex-wrap flex-col md:flex-row">
        <BankAccounts />
        <BankTransfers />
      </div>
    </div>
  );
}

export default page;
