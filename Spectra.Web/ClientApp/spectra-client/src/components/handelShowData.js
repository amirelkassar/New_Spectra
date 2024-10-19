import React from "react";
import NoDataYet from "./noDataYet";

function HandelShowData({ children, isLoading, lengthData }) {
  return (
    <>
      {!isLoading ? (
        lengthData > 0 ? (
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

export default HandelShowData;
