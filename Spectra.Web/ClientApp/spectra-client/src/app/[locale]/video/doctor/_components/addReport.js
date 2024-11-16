"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import PostAssessment from "./reports/post_assessment";
import FollowUp from "./reports/follow_up";
import History from "./reports/history";
import Speech from "./reports/speech";
import MDT from "./reports/mdt";
import Psychological from "./reports/psychological";

function AddReport() {
  const searchParams = useSearchParams();
 
  const ViewCompReports = () => {
    switch (searchParams.get("reportNum")) {
      case "report1":
        return <PostAssessment />;
      case "report2":
        return <FollowUp />;
      case "report3":
        return <History />;
      case "report4":
        return <Speech />;
      case "report5":
        return <MDT />;
      case "report6":
        return <Psychological />;
    }
  };
  return <ViewCompReports />;
}

export default AddReport;
