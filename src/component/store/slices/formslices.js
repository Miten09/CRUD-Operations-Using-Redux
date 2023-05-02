import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    form: {},
  },
  reducers: {
    setNewform: (state, action) => {
      state.form = action.payload;
    },
  },
});

export default FormSlice.reducer;

export const FormActions = FormSlice.actions;
