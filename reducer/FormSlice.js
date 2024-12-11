import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    sumbitForm: (state, action) => {
      const formData = action.payload;
      state.formData = formData;
    },
  },
});

export const { sumbitForm } = FormSlice.actions;
export default FormSlice.reducer;
