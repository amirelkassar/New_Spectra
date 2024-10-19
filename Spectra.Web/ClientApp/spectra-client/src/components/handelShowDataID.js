import React from "react";
import NoDataYet from "./noDataYet";

function HandelShowDataID({ children, isLoading, statusCode }) {
  return (
    <>
      {!isLoading ? (
        statusCode === 200 ? (
          children
        ) : (
          <NoDataYet />
        )
      ) : (
        <p>isLoading</p>
      )}
    </>
  );
}

export default HandelShowDataID;
