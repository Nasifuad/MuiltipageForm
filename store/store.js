import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./reducer/FormSlice";

export const store = configureStore({
  reducer: FormSlice,
});
