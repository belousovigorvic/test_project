import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import mangaListSlice from "./mangaListSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    manga: mangaListSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store