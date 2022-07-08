import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk("auth/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", loginData);
      return data;
    } catch (err) {
      return rejectWithValue("invalid login credentials");
    }
  }
);

const signupUser = createAsyncThunk("auth/signup",
  async (signupData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/signup", signupData);
      return data;
    } catch (error) {
      return rejectWithValue("something went wrong");
    }
  }
);

export { loginUser, signupUser };
