import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserFollwers } from "../features/authSlice";

const getAllUsers = createAsyncThunk(
  "user/getAllusers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/users");
      const {users}=data;
      return users;
     
    } catch (error) {
      return rejectWithValue("failed in  getting users from backend");
    }
  }
);
const getUser=createAsyncThunk("user/getSingleUser",
async ({username},{rejectWithValue})=>{
  try {
    const {data}=await axios.get(`/api/users/${username}`)
    const {user}=data;
     console.log(user)
    return user;

  } catch (error) {
    return rejectWithValue(error.message)
  }
}
)
const editUser=createAsyncThunk("user/editUser",
  async ({userData,token},{rejectWithValue})=>{
    try {
      const {data}=await axios.post(
    "/api/users/edit",
    { userData },
    {
      headers: { authorization: token },
    }
  );
  return data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
const followUser=createAsyncThunk("user/followUser",
  async ( {token, userId,dispatch},{ rejectWithValue })=>{
    try {
      const {data}=await axios.post(`/api/users/follow/${userId}`,
    {},
    {
      headers: { authorization: token },
    })
    console.log(data)
    dispatch(updateUserFollwers(data.user))
    dispatch(editUser({userData:data.user,token}))
    return data;
    } catch (error) {
      return rejectWithValue(error.messege)
    }
  }
  )
const unFollowUser=createAsyncThunk("user/unFollowUser",
  async ({token,userId,dispatch}, { rejectWithValue })=>{
    try {
      const {data}=axios.post(`/api/users/unfollow/${userId}`,
    {},
    {
      headers: { authorization: token },
    })
     dispatch(updateUserFollwers(data.user))
     dispatch(editUser({userData:data.user,token}))
    return data
    } catch (error) {
      return rejectWithValue(error.messege)
    }
  }
  )

export { getAllUsers,getUser,editUser,followUser,unFollowUser};
