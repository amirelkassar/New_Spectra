"use client"
import React, { useState } from "react";
import RowDoctors from "./RowDoctors";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

const DoctorsContainer = () => {
  const initialDoctors = [
    { id: '1', title: 'اخصائيين التوحد' },
    { id: '2', title: 'اخصائيين التغذية' },
    { id: '3', title: 'اخصائيين الاسرة' },
  ];

  const [doctors, setDoctors] = useState(initialDoctors);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setDoctors((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };


  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      screenReaderInstructions={{
        start: 'Drag started. Move item to the desired position.',
        end: 'Drag ended. Item has been moved.'
      }}
    >
      
      <SortableContext items={doctors} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-9">
          {doctors.map((doctor) => (
            <SortableItem key={doctor.id} id={doctor.id}>
              <RowDoctors title={doctor.title} />
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DoctorsContainer;
