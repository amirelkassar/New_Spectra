"use client";
import React from "react";
import RowDoctors from "./rowDoctors";
import { ReactSortable } from "react-sortablejs";

const DoctorsContainer = ({ doctors, setDoctors, onRemoveDoctor }) => {
  return (
    <div className="flex flex-col gap-7 lgl:gap-9">
      <ReactSortable
        list={doctors}
        setList={setDoctors}
        animation={200}
        delayOnTouchStart={false}
        delay={2}
        className="flex flex-col gap-7 lgl:gap-9"
      >
        {doctors.map((doctor) => (
          <div key={doctor.id} data-id={doctor.id}>
            <RowDoctors
              title={doctor.title}
              added={true}
              onRemoveDoctor={() => onRemoveDoctor(doctor)}
            />
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default DoctorsContainer;
