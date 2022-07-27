import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authSlice";
import { postsReducer } from "../features/postSlice";
import { modalReducer } from "../features/modalSlice";
import { usersReducer } from "../features/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    modal: modalReducer,
    users: usersReducer
  }
});
