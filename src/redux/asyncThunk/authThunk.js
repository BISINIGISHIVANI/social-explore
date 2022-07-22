import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk(
  "auth/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", loginData);
      const { encodedToken, foundUser } = data;
      if (encodedToken) {
        localStorage.setItem("socio-token", encodedToken);
        localStorage.setItem("socio-user", JSON.stringify(foundUser));
      }
      return data;
    } catch (err) {
      return rejectWithValue("invalid login credentials");
    }
  }
);

const signupUser = createAsyncThunk(
  "auth/signup",
  async (signupData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/signup", signupData);
      const { encodedToken, createdUser } = data;
      if (encodedToken) {
        localStorage.setItem("socio-token", encodedToken);
        localStorage.setItem("socio-user", JSON.stringify(createdUser));
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const editUser = createAsyncThunk(
  "user/edit",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const { data } = axios.post(
        "/api/user/edit",
        { userData },
        { headers: { authorization: token } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { loginUser, signupUser, editUser };
