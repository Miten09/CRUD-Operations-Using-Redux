import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./slices/formslices";

const store = configureStore({
  reducer: {
    user: FormSlice,
  },
});

export default store;
