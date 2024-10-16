import React from "react";
import NoDataYet from "./noDataYet";

function HandelShowDataEdit({ children, isLoading, isID }) {
  return (
    <>
      {!isLoading ? (
       isID ? (
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

export default HandelShowDataEdit;
