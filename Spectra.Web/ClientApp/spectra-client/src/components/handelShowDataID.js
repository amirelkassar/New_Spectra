import React from "react";
import NoDataYet from "./noDataYet";
import Loader from "./loader";

function HandelShowDataID({ children, isLoading, statusCode }) {
  return (
    <>
      {!isLoading ? statusCode === 200 ? children : <NoDataYet /> : <Loader />}
    </>
  );
}

export default HandelShowDataID;
