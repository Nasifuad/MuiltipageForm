import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "../reducer/FormSlice";
const store = configureStore({
  reducer: FormSlice,
});
export default store;
