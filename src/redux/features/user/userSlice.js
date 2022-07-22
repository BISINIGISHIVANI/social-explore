import { createSlice } from "@reduxjs/toolkit";
import { editUser } from "../../asyncThunk/authThunk";
import { getAllUsers, getSingleUser } from "../../asyncThunk/userThunk";

const initialState = {
  users: [],
  singleUser: {
    followers: [],
    following: []
  },
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
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.singleUser = action.payload.user;
    },
    [getSingleUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [editUser.fulfilled]: (state, action) => {
      state.singleUser = action.payload.user;
    },
    [editUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    }
  }
});
export const { reducer: usersReducer } = userSlice;
