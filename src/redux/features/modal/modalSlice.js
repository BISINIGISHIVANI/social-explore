import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  editPostId: "",
  editPostText: "",
  editPostModal: false,
  editProfile: false,
  editProfileText: "",
  editCommentModal: false,
  editCommentText: "",
  editCommentId: ""
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    openEditPostModal: (state, action) => {
      state.editPostModal = true;
      state.editPostId = action.payload.postId;
      state.editPostText = action.payload.postData;
    },
    closeEditPostModal: (state) => {
      state.editPostModal = false;
      state.editCommentText = "";
      state.editCommentId = "";
    },
    openEditProfileModal: (state, action) => {
      state.editProfile = true;
      state.editProfileText = action.payload;
    },
    closeEditProfileModal: (state) => {
      state.editProfile = false;
      state.editProfileText = "";
    },
    openEditCommentModal: (state, action) => {
      state.editCommentModal = true;
      state.editCommentText = action.payload.text;
      state.editCommentId = action.payload._id;
    },
    closeEditCommentModal: (state) => {
      state.editCommentModal = false;
      state.editCommentText = "";
      state.editCommentId = "";
    }
  }
});
export const {
  openModal,
  closeModal,
  openEditPostModal,
  closeEditPostModal,
  openEditCommentModal,
  closeEditCommentModal,
  closeEditProfileModal,
  openEditProfileModal
} = modalSlice.actions;
export const { reducer: modalReducer } = modalSlice;
