"use client";
import React, { useState } from "react";
import RowDoctors from "./rowDoctors";
import { ReactSortable } from "react-sortablejs";
const initialDoctors = [
  { id: "1", title: "اخصائيين التوحد" },
  { id: "2", title: "اخصائيين التغذية" },
  { id: "3", title: "اخصائيين الاسرة" },
];
const DoctorsContainer = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  return (
    <div className="flex flex-col gap-7 lgl:gap-9">
      <ReactSortable
        list={doctors}
        setList={setDoctors}
        className="flex flex-col gap-7 lgl:gap-9"
      >
        {doctors.map((doctor) => (
          <div key={doctor.id} data-id={doctor.id}>
            <RowDoctors title={doctor.title} />
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default DoctorsContainer;
