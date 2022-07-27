import { createSlice } from "@reduxjs/toolkit";
import {
  addPosts,
  deletePost,
  editPost,
  getPosts,
  likePost,
  unLikePost
} from "../asyncThunk/postThunk";
const initialState = {
  posts: [],
  postsLoading: false,
  error: null
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.postsLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.postsLoading = true;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addPosts.pending]: (state) => {
      state.postsLoading = false;
    },
    [addPosts.fulfilled]: (state, action) => {
      state.postsLoading = true;
      state.posts = action.payload;
    },
    [addPosts.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [editPost.fulfilled]: (state, action) => {
      state.postsLoading = true;
      state.posts = action.payload;
    },
    [editPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.postsLoading = true;
      state.posts = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [likePost.fulfilled]: (state, action) => {
      state.postsLoading = true;
      state.posts = action.payload;
    },
    [likePost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [unLikePost.fulfilled]: (state, action) => {
      state.postsLoading = true;
      state.posts = action.payload;
    },
    [unLikePost.rejected]: (state, action) => {
      state.error = action.payload;
    }
  }
});
export const { reducer: postsReducer } = postSlice;
