import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slices/todoSlice";

const store = configureStore({
    reducer: {
        task: todoSlice,
    },
});
export default store;