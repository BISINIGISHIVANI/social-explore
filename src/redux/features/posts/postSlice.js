import { createSlice } from "@reduxjs/toolkit";
import {
  getPosts,
  createPosts,
  getUserPost,
  editPost,
  deletePost
} from "../../asyncThunk/postThunk";
const initialState = {
  posts: [],
  isLoading: false,
  status: "idle"
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
      state.status = "pending";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.status = "resolved";
      state.posts = action.payload.posts;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload.errors[0];
    },
    [createPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [createPosts.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.userPost = action.payload.posts;
    },
    [getUserPost.rejected]: (state, action) => {
      state.error = action.payload.errors[0];
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.posts = action.payload.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [editPost.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.posts = action.payload.posts;
    },
    [editPost.rejected]: (state, action) => {
      state.error = action.payload;
    }
  }
});
export const { reducer: postsReducer } = postsSlice;
