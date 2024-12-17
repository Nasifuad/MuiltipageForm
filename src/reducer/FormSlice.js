import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formData: {},
  plan: null,
  addOns: [],
};

const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    sumbitForm: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { sumbitForm } = FormSlice.actions;
export default FormSlice.reducer;
