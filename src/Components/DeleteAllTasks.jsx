import React from "react";
import { useDispatch } from "react-redux";
import { deleteAll } from "../Store/Slices/todoSlice";

function DeleteAllTasks() {
  const dispatch = useDispatch();
  return (
    <div className="w-[600px] mx-auto mt-4 flex justify-center">
      <button className="bg-red-600 text-white rounded-lg" onClick={()=>dispatch(deleteAll())}>Delete All</button>
    </div>
  );
}

export default DeleteAllTasks;
