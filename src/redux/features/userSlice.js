import { createSlice } from "@reduxjs/toolkit";
import { editUser, followUser, getAllUsers,unFollowUser } from "../asyncThunk/userThunk";
const initialState = {
  users: [],
  userProfile:{},
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
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.status = "rejected";
      state.error = action.payload.error;
    },
    [followUser.fulfilled]:(state,action)=>{
      const { followUser } = action.payload;
      state.users = [...state.users].map((user) =>
        user._id === followUser._id ? followUser : user
      );
    },
    [followUser.rejected]:(state,action)=>{
      state.error=action.payload;
    },
    [unFollowUser.fulfilled]:(state,action)=>{
      const { followUser } = action.payload;
      state.users = [...state.users].map((user) =>
        user._id === followUser._id ? followUser : user
      );
    },
    [editUser.fulfilled]:(state,action)=>{
      state.loading = false;
      state.error = "";
      state.status = "resolved";
      state.userProfile=action.payload;
    },
    [editUser.rejected]:(state,action)=>{
      state.loading = false;
      state.status = "rejected";
      state.error = action.payload.error;
    }
  }
});
export const { reducer: usersReducer } = userSlice;
