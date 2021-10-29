import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/Constant";

export const fetchPost = createAsyncThunk("user/post", async () => {
  const response = await axios.get(`${BASE_URL}/addpost`);
  return response.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: { status: "idle", error: null, posts: [] },
  reducers: {},
  extraReducers: {
    [fetchPost.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [fetchPost.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchPost.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default postSlice.reducer;
