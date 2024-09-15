"use client"
import { useSearchParams } from "next/navigation";
import React from "react";
import PatientsEdit from "../../components/patients-edit";
import PatientsDetails from "../../components/patients-details";
function LayPatient() {
  const searchParams = useSearchParams();
  return (
    <>{searchParams.get("edit") ? <PatientsEdit /> : <PatientsDetails />}</>
  );
}

export default LayPatient;
