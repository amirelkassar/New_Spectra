import React from "react";
import HeaderAdd from "../components/headerAdd";
import man from "@/assets/images/placeholder-person.png";
import FormAddPrescriptions from "../components/form-add-prescriptions";

function Page() {
  const data ={
    name:'عبدالله الشيخ',
    childName:"احمد عبدالله",
    image:man
  }
  return (
    <div className="flex flex-col mdl:gap-8">
      <HeaderAdd title={" اضافة وصفة طبية"} data={data} />
      <FormAddPrescriptions />
    </div>
  );
}

export default Page;
