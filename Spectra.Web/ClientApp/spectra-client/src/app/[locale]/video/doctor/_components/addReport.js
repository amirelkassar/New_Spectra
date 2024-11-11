'use client'
import React from "react";
import PostAssessment from "./post_assessment";
import { useSearchParams } from "next/navigation";

function AddReport() {
  const searchParams = useSearchParams();

  const ViewCompReports = () => {
    switch (searchParams.get("reportNum")) {
      case "report1":
        return <PostAssessment />;
    }
  };
  return <ViewCompReports />;
}

export default AddReport;
