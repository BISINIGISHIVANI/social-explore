import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllUsers = createAsyncThunk(
  "user/getAllusers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/users");
      return data;
    } catch (error) {
      return rejectWithValue("failed in  getting users from backend");
    }
  }
);
export { getAllUsers };
