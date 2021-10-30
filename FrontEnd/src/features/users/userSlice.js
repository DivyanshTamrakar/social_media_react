import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/Constant";

const initialState = { status: "idle", error: null, user: {} };
export const email = localStorage.getItem("email");

export const fetchUser = createAsyncThunk("user/user", async (email) => {
  const response = await axios.get(`${BASE_URL}/users/${email}`);
  return response.data;
});

export const UpdateUserData = createAsyncThunk(
  "user/update",
  async (action) => {
    const response = await axios.post(
      `${BASE_URL}/users/update/${action.userid}`,
      action.body
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.user;
    },
    [fetchUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [UpdateUserData.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.user;
    },
    [UpdateUserData.pending]: (state, action) => {
      state.status = "pending";
    },
    [UpdateUserData.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default userSlice.reducer;
