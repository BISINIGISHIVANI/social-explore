import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/posts");
      const { posts } = data;
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
const addPosts = createAsyncThunk(
  "post/addPost",
  async ({ postData, token }, rejectWithValue) => {
    try {
      const { data } = await axios.post(
        "/api/posts",
        { postData },
        { headers: { authorization: token } }
      );
      const { posts } = data;
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
const editPost = createAsyncThunk(
  "post/editPost",
  async ({ postId, postData, token }, rejectWithValue) => {
    try {
      const { data } = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        {
          headers: { authorization: token }
        }
      );
      const { posts } = data;
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const deletePost = createAsyncThunk(
  "",
  async ({ postId, token }, rejectWithValue) => {
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token }
      });
      const { posts } = data;
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const likePost = createAsyncThunk(
  "post/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: token }
        }
      );
      const { posts } = data;
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const unLikePost = createAsyncThunk(
  "post/unlikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: token }
        }
      );
      const { posts } = data;
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export { getPosts, addPosts, editPost, deletePost, likePost, unLikePost };
