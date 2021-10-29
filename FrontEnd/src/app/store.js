import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../features/posts/postSlice";
import userSliceReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    user: userSliceReducer,
  },
});
