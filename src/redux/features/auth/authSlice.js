import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser, editUser } from "../../asyncThunk/authThunk";
import { followUser, unfollowUser } from "../../asyncThunk/userThunk";
const initialState = {
  user: JSON.parse(localStorage.getItem("socio-user")),
  token: localStorage.getItem("socio-token"),
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = "";
      state.token = "";
      localStorage.removeItem("socio-user");
      localStorage.removeItem("socio-token");
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = true;
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.foundUser;
      state.token = action.payload.encodedToken;
      state.error = "";
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [signupUser.pending]: (state) => {
      state.isLoading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      state.error = "";
    },
    [signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [editUser.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.user = action.payload.user;
    },
    [editUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [followUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [followUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.error = action.payload;
    }
  }
});
export const { logoutUser, updateUser, setLoading } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
