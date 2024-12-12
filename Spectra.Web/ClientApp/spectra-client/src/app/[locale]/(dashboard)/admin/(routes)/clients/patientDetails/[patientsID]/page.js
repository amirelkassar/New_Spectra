"use client";
import React from "react";
import Information from "../_components/information";
import Symptoms from "../_components/symptoms";
import Survey from "../_components/Survey";
import { useSearchParams } from "next/navigation";
import SurveyEdit from "../_components/SurveyEdit";
import SymptomsEdit from "../_components/SymptomsEdit";
import InformationEdit from "../_components/InformationEdit";

function Page({ params }) {
  const searchParams = useSearchParams();
  return searchParams.get("edit") === "true" ? (
    <div className="w-full flex-1 flex-col gap-6 flex">
      <InformationEdit/>
      <SymptomsEdit/>
      <SurveyEdit />
      
    </div>
  ) : (
    <div className="w-full flex-1 flex-col gap-6 flex">
      <Information id={params.patientsID} />
      <Symptoms />
      <Survey />
    </div>
  );
}

export default Page;
