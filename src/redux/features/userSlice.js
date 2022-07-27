import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../asyncThunk/userThunk";
const initialState = {
  users: [],
  status: "idle",
  loading: false,
  error: null
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.status = "resolved";
      state.users = action.payload.users;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.status = "rejected";
      state.error = action.payload.error;
    }
  }
});
export const { reducer: usersReducer } = userSlice;
