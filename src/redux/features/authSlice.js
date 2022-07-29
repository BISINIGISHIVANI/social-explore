import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "../asyncThunk/authThunk";
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
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    updateUserFollwers:(state,action)=>{
      state.user=action.payload;
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
    }
  }
});
export const { logoutUser, setLoading ,updateUserFollwers} = authSlice.actions;
export const { reducer: authReducer } = authSlice;
