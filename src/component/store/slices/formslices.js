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
      console.log(action.payload);

      state.form.map((user) => {
        console.log(user);
        // console.log(action.payload.select);

        if (user.id === action.payload.id) {
          user.form = action.payload.form;
        }
      });
    },
  },
});

export default FormSlice.reducer;

export const { setNewform, deleteUser, editUser } = FormSlice.actions;
