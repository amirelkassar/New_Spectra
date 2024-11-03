import ArrowTopIcon from "@/assets/icons/arrowTop";
import React from "react";
import Button from "./button";

function BtnAddInVideo({...props}) {
  return (
    <Button variant="secondary" {...props} className=" duration-200 hover:shadow-md size-8 mdl:size-10 rounded-full p-1 ">
      <ArrowTopIcon />
    </Button>
  );
}

export default BtnAddInVideo;
