import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getPosts = createAsyncThunk(
  "post/getPost",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/posts");
      return data;
    } catch (error) {
      return rejectWithValue("", error.data);
    }
  }
);
const getPostById = createAsyncThunk(
  "api/userId",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/posts/${userId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

const getUserPost = createAsyncThunk(
  "api/userPost",
  async (userName, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/posts/user/${userName}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
const createPosts = createAsyncThunk(
  "api/createPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: { authorization: token }
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue("");
    }
  }
);
const deletePost = createAsyncThunk(
  "api/deletePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token }
      });
      return data;
    } catch (error) {
      return rejectWithValue("");
    }
  }
);
const editPost = createAsyncThunk(
  "api/editPost",
  async ({ postData, postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        { headers: { authorization: token } }
      );
      return data;
    } catch (error) {
      rejectWithValue("something went wrong");
    }
  }
);

export {
  getPosts,
  createPosts,
  getPostById,
  getUserPost,
  editPost,
  deletePost
};
