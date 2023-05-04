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
      state.form = "";
    },
    deleteUser: (state, action) => {
      // console.log(action.payload);
      state.form = state.form.filter((value, index) => {
        return index !== action.payload;
      });
    },
    editUser: (state, action) => {
      // console.log(action.payload);

      const newIndex = sessionStorage.getItem("id");
      // console.log(newIndex);

      const updatedForm = state.form.map((value, index) => {
        // console.log(index);
        // console.log(newIndex);
        if (index == newIndex) {
          // console.log(value.clientName);
          // console.log(action.payload.clientName);
          return (
            (value.clientName = action.payload.clientName),
            (value.publisher = action.payload.publisher),
            (value.parentCompany = action.payload.parentCompany)
          );
        } else {
          return value;
        }
      });

      console.log(updatedForm);
      // const objIndex = state.form.findIndex((obj, index) => {
      //   console.log(index);
      //   console.log(action.payload.id);

      //   return index === action.payload.id;
      // });
      // console.log(objIndex);
      // // console.log(action.payload.select.clientName);
      // // console.log(state.form[objIndex].clientName);

      // state.form[objIndex].clientName = action.payload.select.clientName;
    },
  },
});

export default FormSlice.reducer;

export const { setNewform, deleteUser, editUser } = FormSlice.actions;
