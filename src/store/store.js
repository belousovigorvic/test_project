import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store