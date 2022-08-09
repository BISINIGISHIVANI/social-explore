import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../asyncThunk/userThunk";
const initialState={
    singleUserProfile:{},
    status: "idle",
    loading: false,
    error: null
}
const singleUserProfileSlice=createSlice({
    name: "userProfile",
    initialState,
    reducers:{},
    extraReducers:{
        [getUser.fulfilled]:(state,action)=>{
            console.log(action.payload)
            state.loading = false;
            state.error = "";
            state.status = "resolved";
            state.singleUserProfile = action.payload;
        },
        [getUser.rejected]:(state,action)=>{
            state.loading = false;
            state.status = "rejected";
            state.error = action.payload;
        }
    }
})
export const {reducer:userProfileReducer}=singleUserProfileSlice;