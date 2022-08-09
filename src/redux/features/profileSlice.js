import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showProfileModal: false,
  profileToEdit: {},
};

const userProfileSlice = createSlice({
  name: "editProfile",
  initialState,
  reducers: {
    openProfile: (state) => {
      state.showProfileModal = true;
    },
    closeProfile: (state) => {
      state.showProfileModal = false;
      state.profileToEdit = {};
    },
  },
});

export const {openProfile,closeProfile}=userProfileSlice.actions;
export const {reducer:editProfileReducer}=userProfileSlice;

