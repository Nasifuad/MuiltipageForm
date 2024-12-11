import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formData: {
    nama: "Test Case 301",
    email: "test@123",
    number: "1234567890",
    userInfo: {
      name: "Test Case 301",
      email: "test@123",
      number: "1234567890",
    },
  },
};

const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    sumbitForm: (state, action) => {
      const { key, value } = action.payload;
      state.formData[key] = value;
    },
  },
});

export const { sumbitForm } = FormSlice.actions;
export default FormSlice.reducer;
