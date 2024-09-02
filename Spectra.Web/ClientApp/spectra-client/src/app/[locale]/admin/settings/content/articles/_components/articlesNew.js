"use client";
import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import FavIcon from "@/assets/icons/fav";
import Button from "@/components/button";
import { TextInput } from "@mantine/core";
import React, { useState } from "react";

function ArticlesNew() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const handleAddTask = () => {
    if (title && author) {
      setTasks([...tasks, { title, author, id: Date.now() }]);
      setTitle("");
      setAuthor("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    setEditTitle(task.title);
    setEditAuthor(task.author);
    setIsEditing(id);
  };

  const handleUpdateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === isEditing
          ? { ...task, title: editTitle, author: editAuthor }
          : task
      )
    );
    setIsEditing(null);
    setEditTitle("");
    setEditAuthor("");
  };
  console.log(tasks);

  return (
    <div>
      {isEditing === null ? (
        <div className="mt-4 mb-11 py-6 px-5 rounded-xl border-dashed border border-grayMedium/80">
          <TextInput
            label="عنوان المقالة"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            classNames={{
              label: "text-base text-Regular mb-1",
              input: "rounded-[10px] border-greenMain h-11 mb-3",
            }}
          />
          <TextInput
            label="اسم كاتب المقالة"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            classNames={{
              label: "text-base text-Regular mb-1",
              input: "rounded-[10px] border-greenMain h-11 mb-3",
            }}
          />
          <Button
            variant="secondary"
            className="w-full font-Bold mt-6"
            onClick={handleAddTask}
          >
            تأكيد
          </Button>
        </div>
      ) : (
        <div className="mt-4 mb-11 py-6 px-5 rounded-xl border-dashed border border-grayMedium/80">
          <TextInput
            placeholder="عنوان المقالة"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            classNames={{
              label: "text-base text-Regular mb-1",
              input: "rounded-[10px] border-greenMain h-11 mb-3",
            }}
          />
          <TextInput
            placeholder="اسم كاتب المقالة"
            value={editAuthor}
            onChange={(e) => setEditAuthor(e.target.value)}
            classNames={{
              label: "text-base text-Regular mb-1",
              input: "rounded-[10px] border-greenMain h-11 mb-3",
            }}
          />
          <Button
            variant="secondary"
            className="w-full font-Bold mt-6"
            onClick={handleUpdateTask}
          >
            تأكيد التعديل
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div key={task.id} shadow="sm" mb="sm">
            <div position="apart">
              <div className="flex items-center justify-center gap-5 mb-3">
                <Button
                  onClick={() => handleDeleteTask(task.id)}
                  className={
                    "text-base   px-3 flex font-bold items-center justify-center h-9 ring-1 !ring-red text-red border-none w-fit !gap-3"
                  }
                >
                  <DeleteIcon /> مسح
                </Button>
                <Button
                  onClick={() => handleEditTask(task.id)}
                  className={
                    " text-base w-fit   px-3  flex gap-2 font-bold items-center justify-center h-9 ring-1 !ring-[#10B0C1] text-[#10B0C1] border-none rounded-[10px]"
                  }
                >
                  <EditIcon pathColor="#10B0C1" className={"w-[17px] h-auto"} />
                  تعديل
                </Button>
              </div>
              <div className="py-3 px-5 border border-black/50 rounded-lg">
                <h4 className="text-base font-Medium">{task.title}</h4>
                <div className="flex items-center justify-end gap-1 mb-3">
                  <p className="text-[12px] text-greenMain">350</p>
                  <FavIcon />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[12px] text-grayDark">{task.author}</p>
                  <p className="text-[12px] text-grayDark">4/1/2024</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesNew;
