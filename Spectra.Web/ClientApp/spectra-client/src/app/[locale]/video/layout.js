import ModalReq from "@/components/modalReq";
import React from "react";
import LayoutVideo from "./_components/LayoutVideo";


function layout({ children }) {
  return (
    <main className="relative flex flex-col gap-4    lgl:py-5 gap-x-5 min-h-screen ">
      <LayoutVideo Children={children} />
      <ModalReq />
    </main>
  );
}

export default layout;
