import React from "react";

function NumDataTable({ num }) {
  return (
    <div className="flex items-center gap-1 text-greenMain">
      <span className="text-xl font-Bold">(</span>
      <p className="text-greenMain text-xs font-Bold">{num}</p>
      <p className="text-greenMain text-xs font-Regular">عنصر</p>
      <span className="text-xl font-Bold">)</span>
    </div>
  );
}

export default NumDataTable;
