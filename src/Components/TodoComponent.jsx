import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import DeleteAllTasks from "./DeleteAllTasks";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "../Store/Slices/todoSlice";

function TodoComponent() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [editId, setEditId] = useState(null); 
  const tasks = useSelector((state) => state.task); 


  const handleAddTask = () => {
    if (task.trim() !== "") {
      if (editId) {
        dispatch(editTask({ id: editId, newTask: task }));
        setEditId(null);
      } else {
        dispatch(addTask({ id: count, task }));
        setCount(count + 1);
      }
      setTask(""); 
    }
  };

  const handleEditClick = (task) => {
    setTask(task.task);
    setEditId(task.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <div className="flex flex-col align-center justify-center">
        <h1 className="text-center text-2xl">Todo List</h1>
        <div className="flex align-center justify-center">
          <input
            type="text"
            className="p-2 w-[500px] rounded-l-lg outline-none"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="rounded-r-lg bg-black text-white"
            onClick={handleAddTask}
          >
            {editId ? "Edit Task" : "Add Task"}
          </button>
        </div>
      </div>
      <TaskDisplay tasks={tasks} onEdit={handleEditClick} onDelete={handleDelete}/>
      <DeleteAllTasks />
    </>
  );
}

export default TodoComponent;
