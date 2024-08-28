import React from "react";
import HeaderTop from "../../header";
function LayoutVideo({ Children }) {
  return (
    <>
      <div className="px-4 xl:px-8">
        <HeaderTop />
      </div>

      <div className="flex-1 flex flex-col">{Children}</div>
    </>
  );
}

export default LayoutVideo;
