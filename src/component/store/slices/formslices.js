import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    form: [],
  },
  reducers: {
    setNewform: (state, action) => {
      state.form.push(action.payload);
    },
    setReset: (state, action) => {
      state.form = [];
    },
    deleteUser: (state, action) => {
      // console.log(action.payload);
      state.form = state.form.filter((value, index) => index !== action.payload);
    },
    editUser: (state, action) => {

      // console.log(newIndex);

      const updatedForm = state.form.map((value, index) => {
        if (index == action.payload.id) {
          return action.payload;
        } else {
          return value;
        }
      });
     state.form=updatedForm
     
      console.log(updatedForm);
    },
  },
});

export default FormSlice.reducer;

export const { setNewform, deleteUser, editUser } = FormSlice.actions;
