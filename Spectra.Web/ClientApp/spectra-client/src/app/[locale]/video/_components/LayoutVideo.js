import React from "react";
import HeaderTop from "../../header";
function LayoutVideo({ Children }) {
  return (
    <>
      <div className="px-4 xl:px-8 bg-transparent fixed top-6 lgl:top-auto w-full lgl:relative z-30 opacity-50 lgl:opacity-100">
        <HeaderTop />
      </div>

      <div className="flex-1 flex flex-col  justify-end h-full">{Children}</div>
    </>
  );
}

export default LayoutVideo;
