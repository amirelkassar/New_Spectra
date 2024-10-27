"use client";
import React, { useState } from "react";
import PageEdit from "./components/pageEdit";
import PageInfo from "./components/pageInfo";
import CopyCode from "./components/copyCode";

function Page() {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <div className=" flex flex-col gap-4 mb-10 flex-1  w-full">
        <CopyCode />
      </div>
      {edit ? (
        <PageEdit setEdit={setEdit} />
      ) : (
        <PageInfo setEdit={setEdit} edit={edit} />
      )}
    </div>
  );
}

export default Page;
