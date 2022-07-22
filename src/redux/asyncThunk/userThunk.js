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
const getSingleUser = createAsyncThunk(
  "user/singleUser",
  async ({ username }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/users/${username}`);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
const followUser = createAsyncThunk(
  "users/follow",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("failed in  getting users");
    }
  }
);
const unfollowUser = createAsyncThunk(
  "users/follow",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("failed in  getting users");
    }
  }
);
export { getAllUsers, followUser, unfollowUser, getSingleUser };
