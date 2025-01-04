import React from "react";
import NoDataYet from "./noDataYet";
import Loader from "./loader";

function HandelShowDataEdit({ children, isLoading, isID, isSuccess=false }) {
  return (
    <>
      {!isLoading ? isID ? children : <NoDataYet /> : <Loader />}
      {isSuccess ? <p className="font-Bold p-4 max-w-[290px] text-center">تم الحفظ</p> : null}
    </>
  );
}

export default HandelShowDataEdit;
