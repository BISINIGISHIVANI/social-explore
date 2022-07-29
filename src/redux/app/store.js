import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authSlice";
import { postsReducer } from "../features/postSlice";
import { modalReducer } from "../features/modalSlice";
import { usersReducer } from "../features/userSlice";
import { editProfileReducer } from "../features/profileSlice";
import { userProfileReducer } from "../features/singleUserProfileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    modal: modalReducer,
    users: usersReducer,
    editProfile:editProfileReducer,
    userProfile:userProfileReducer
  }
});
