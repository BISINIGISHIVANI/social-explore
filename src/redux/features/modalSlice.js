import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  postToEdit: {}
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
      state.postToEdit = {};
    },
    openEditPost: (state, action) => {
      state.postToEdit = action.payload;
    }
  }
});
export const { openModal, closeModal, openEditPost } = modalSlice.actions;
export const { reducer: modalReducer } = modalSlice;
