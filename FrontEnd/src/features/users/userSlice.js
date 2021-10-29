import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/Constant";
export const email = localStorage.getItem("email");

export const fetchUser = createAsyncThunk("user/user", async (email) => {
  const response = await axios.get(`${BASE_URL}/users/${email}`);
  return response.data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: { status: "idle", error: null, user: {} },
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload;
    },
    [fetchUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default userSlice.reducer;
