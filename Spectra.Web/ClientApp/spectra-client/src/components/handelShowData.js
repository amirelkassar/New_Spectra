import React from "react";
import NoDataYet from "./noDataYet";
import Loader from "./loader";

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
        <div className="flex items-center justify-center min-h-[350px] w-full">
          <Loader />
        </div>
      )}
    </>
  );
}

export default HandelShowData;
