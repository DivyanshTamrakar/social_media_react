import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { auth } from "../../firebaseConfig/firebase";
import { BASE_URL } from "../../utils/Constant";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  status: "idle",
};

export const signIn = createAsyncThunk(
  "user/auth/signIn",
  async (actions, { rejectWithValue }) => {
    const { email, password } = actions;
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      return response;
    } catch (err) {
      throw rejectWithValue(err.message);
    }
  }
);

export const signOut = createAsyncThunk("user/auth/signOut", async () => {
  const response = await auth.signOut();
  return response;
});

export const signUp = createAsyncThunk("user/auth/signUp", async (action) => {
  const response = await axios.post(`${BASE_URL}/addpost`, action);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (localStorage.getItem("login")) state.isAuthenticated = true;
      return state;
    },
  },
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      if (action.payload.user.email) {
        localStorage.setItem("login", true);
        localStorage.setItem("email", action.payload.user.email);
      }
      state.isLoading = false;
      state.status = "success";
      state.isAuthenticated = true;
    },
    [signIn.pending]: (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    },
    [signIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = "rejected";
    },

    [signOut.fulfilled]: (state, action) => {
      localStorage.clear();
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    [signOut.pending]: (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    },
    [signOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = "rejected";
    },
  },
});

export const { checkStatus } = authSlice.actions;
export default authSlice.reducer;
