import { useDispatch, useSelector } from "react-redux"
import { followUser } from "../../redux/asyncThunk/userThunk"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
const SuggestUser=()=>{
    const dispatch=useDispatch()
    const {user,token}=useSelector((state)=>state.auth)
    const {users}=useSelector((state)=>state.users);
    const [suggestUsers,setSuggestUsers]=useState([])
    const navigate=useNavigate()
    useEffect(() => {
    setSuggestUsers(
      users.filter(
        (listUser) =>
          listUser.username !== user.username &&
          !user.following?.find(
            (account) => account.username === listUser.username
          )
      )
    );
  }, [users, user]);
    const followUserHandler=(id)=>{
        dispatch(followUser({token,userId:id,dispatch}))
      }
    return <div>
      {suggestUsers.length>0 ?
      <div className="post-card padding-sm mg-xl bd-radius-sm">
        <h2>you might like also</h2>
        {suggestUsers.map(({_id,avatar,username,firstName,lastName}) => (
          <div
            key={_id}
            className="flex-row gap flex-center flex-space-between"
          >
            <div
              onClick={() => navigate(`/profile/${username}`)}
              className="flex-row flex-center  gap mg-xl padding-md"
            >
              <img
                className="user-avatar"
                src={avatar}
                alt="suggested-user"
              />
            </div>
            <div className="width-xl"onClick={() => navigate(`/profile/${username}`)}>
              <h3>
                {firstName} {lastName}
              </h3>
              <span>@{username}</span>
            </div>
            <div>
                <button
                  className="post-btn cursor-pointer"
                  onClick={()=>followUserHandler(_id)}
                >
                 Follow
                </button>
            </div>
          </div>
        ))}
      </div>
        :
        <div className="post-card padding-sm mg-xl bd-radius-sm">
           <h2>your following all users</h2>
        </div>
        }
    </div>
}
export {SuggestUser}