import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { editUser } from "../../redux/asyncThunk/userThunk";
import { closeProfile } from "../../redux/features/profileSlice";

const EditProfile=()=>{
    const dispatch=useDispatch()
    const { user, token } = useSelector((state) => state.auth);
    const { showProfileModal}=useSelector((state)=>state.editProfile);
    const { firstName, lastName,bio } = user;
    const [userData,setUserData]=useState({
        firstName:firstName,
        lastName:lastName,
        bio:bio
    })
    const closeEditProfileHandler=()=>{
        dispatch(closeProfile())
    }
    const editProfileHandler=async (profileData)=>{
        dispatch(editUser({userData:profileData,token}))
        dispatch(closeProfile())
        toast.success("profile updated successfully")
    }
    return <div>
        {showProfileModal &&
        <div className="add-post padding-sm bd-radius-sm">
      <form 
      className="flex-col gap flex-space-between edit-post"
      onSubmit={(e)=>{
            e.preventDefault();
        editProfileHandler(userData)}}
      >
        <div className="flex-col gap flex-center">
             <label className="flex-row gap"htmlFor="firstName">
                FirstName 
                <input 
                id="firstName"
            value={userData.firstName}
            onChange={(e)=>setUserData({...userData,firstName:e.target.value})}
            />
            </label>
            <label className="flex-row gap" htmlFor="lastName">
                LastName
                <input 
                id="lastName"
            value={userData.lastName}
            onChange={(e)=>setUserData({...userData,lastName:e.target.value})}
            />
            </label>
            <label className="flex-row gap" htmlFor="bio">
               Biography
                <input 
                id="bio"
            value={userData.bio}
            onChange={(e)=>setUserData({...userData,bio:e.target.value})}
            />
            </label>
        </div>
            <div className="flex-row gap flex-center ">
              <button
                className="cursor-pointer post-modal-btn btn-secondary"
                onClick={closeEditProfileHandler}
              >
                cancel
              </button>
              <button
                className="cursor-pointer post-modal-btn post-btn"
                type="submit"
              >
                Submit
              </button>
            </div>
      </form>
    </div>}
    </div>
}
export {EditProfile}