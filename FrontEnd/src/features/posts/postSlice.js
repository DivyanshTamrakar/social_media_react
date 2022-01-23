import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/Constant";

const initialState = { status: "idle", error: null, posts: [] };
export const fetchPost = createAsyncThunk("user/post", async () => {
  const response = await axios.get(`${BASE_URL}/addpost`);
  return response.data;
});

export const UploadPost = createAsyncThunk("user/addpost", async (action) => {
  const response = await axios.post(`${BASE_URL}/addpost`, action);
  return response.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchPost.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload.posts;
    },
    [fetchPost.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchPost.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [UploadPost.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = [action.payload.post,...state.posts ];
    },
    [UploadPost.pending]: (state, action) => {
      state.status = "pending";
    },
    [UploadPost.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default postSlice.reducer;
