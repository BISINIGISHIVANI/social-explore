import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Navbar, PostCard, Sidebar } from "../../component"
import { EditProfile } from "../../component/editProfile/editProfile"
import { SuggestUser } from "../../component/suggestUser/suggestUsers"
import {getUser} from "../../redux/asyncThunk/userThunk"
import { openProfile } from "../../redux/features/profileSlice"

const ProfilePage=()=>{
    const dispatch=useDispatch()
    const {user:{username:curruser}}=useSelector((state)=>state.auth)
    const {singleUserProfile}=useSelector((state)=>state.userProfile)
    const {posts}=useSelector((state)=>state.posts)
    const {username}=useParams();
    const myposts = posts.filter((post) => post.username === username);
    const {
      _id,
    firstName,
    lastName,
    followers,
    avatar,
    following,
    bio,
  } = singleUserProfile;
  useEffect(()=>{
    dispatch(getUser({username:username}))
  },[username,dispatch])
  const editProfileHandler=()=>{
      dispatch(openProfile())
    }
 return <div>
  <Navbar/>
  <div className="flex-row">
  <div>
    <Sidebar/>
  </div>
    <section className="flex-row main-content">
      <section className="bd-sm content flex-col gap ">
            <div className=" bd-radius-sm flex-col flex-center align-center">
              <div className="flex-row gap">
                <img className="user-avatar" src={avatar} alt="user-avatar" />
                <div>
                  <h1>
                    {firstName} {lastName}
                  </h1>
                  <p> @{username}</p>
                </div>
              </div>
              <div className="flex-row  padding-xl">
                <span>Followers {followers?.length} </span>
                <div className="flex-row">
                  <span>
                    {" "}
                    | Following {following?.length} | Posts{" "}
                {myposts?.length}{" "}
                  </span>
                </div>
              </div>
              <h3>{bio}</h3>
            </div>
            <div className="flex-row gap flex-center align-center">
              {username === curruser ? 
               <button
                      className="start-btn cursor-pointer"
                      onClick={editProfileHandler}
                    >
                      Edit
                    </button>
              : 
                null
              }
            </div>
            <div className="flex-col gap">
              <hr />
              {myposts.length > 0 ? (
                <div className="flex-col gap">
                  {myposts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              ) : (
                <h3>No posts yet</h3>
              )}
            </div>
            <div className="post-center">
               <EditProfile/>
            </div>
          </section>
          <aside className="padding-edges aside cursor-pointer">
            <SuggestUser />
            </aside>
    </section>
  </div>
 </div>
}
export {ProfilePage}