import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
  },
});
