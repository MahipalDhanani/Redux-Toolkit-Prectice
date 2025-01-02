import React from "react";

function TaskDisplay({ tasks, onEdit , onDelete }) {
  return (
    <>
      <div className="w-[600px] mx-auto mt-4">
        <ul className="flex flex-col align-center justify-center">
          {tasks?.map((task) => {
            return (
              <li key={task.id} className="flex justify-between p-2 border-b-2">
                <p>{task.id}. {task.task}</p>
                <span className="shadow-md rounded-lg">
                  <button className="bg-blue-500 text-white rounded-l-lg" onClick={() => onEdit(task)}>
                    Edit
                  </button>
                  <button className="bg-red-500 text-white rounded-r-lg" onClick={() => onDelete(task.id)}>
                    Delete
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TaskDisplay;
