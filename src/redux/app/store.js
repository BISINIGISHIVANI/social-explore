import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/authSlice";
import { postsReducer } from "../features/posts/postSlice";
import { usersReducer } from "../features/user/userSlice";
import { modalReducer } from "../features/modal/modalSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    posts: postsReducer,
    modal: modalReducer
  }
});
