import { useEffect } from "react";
import { Navbar } from "../../component/navbar/navbar";
import { Sidebar } from "../../component/sidebar/sidebar";
import { SuggestUser } from "../../component/userSidebar/userSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from "../../redux/asyncThunk/postThunk";
import {
  followUser,
  getSingleUser,
  unfollowUser
} from "../../redux/asyncThunk/userThunk";
import { PostCard } from "../../component/postcard/postcard";
const ProfilePage = () => {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { user, token } = useSelector((state) => state.auth);
  const { singleUser, users } = useSelector((state) => state.users);
  const { _id } = singleUser;
  const myposts = posts.filter((post) => post.username === userName);
  const otherUser = users.find((user) => user.username === userName);
  const { firstName, lastName, bio, avatar } = otherUser;
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getSingleUser({ username: userName }));
  }, [dispatch, userName]);
  const followHandler = () =>
    dispatch(followUser({ followUserId: _id, token }));
  const unfollowHandler = () =>
    dispatch(unfollowUser({ followUserId: _id, token }));
  return (
    <div>
      <Navbar />
      <div className="flex-row">
        <div>
          <Sidebar />
        </div>
        <section className="flex-row main-content">
          <section className="bd-sm content flex-col gap ">
            <div className=" bd-radius-sm flex-col flex-center align-center">
              <div className="flex-row gap">
                <img className="" src={avatar} alt="" />
                <div>
                  <h1>
                    {firstName} {lastName}
                  </h1>
                  <p> @{userName}</p>
                </div>
              </div>
              <div className="flex-row  padding-xl">
                <span>Followers {singleUser.followers.length} </span>
                <div className="flex-row">
                  <span>
                    {" "}
                    | Following {singleUser.following.length} | Posts{" "}
                    {myposts?.length}{" "}
                  </span>
                </div>
              </div>
              <h3>{bio}</h3>
            </div>
            <div className="flex-row gap flex-center align-center">
              {userName === user?.username ? null : (
                <div>
                  {user?.following.some(
                    (user) => user.username === userName
                  ) ? (
                    <button
                      className="start-btn cursor-pointer"
                      onClick={unfollowHandler}
                    >
                      following
                    </button>
                  ) : (
                    <button
                      className="start-btn cursor-pointer"
                      onClick={followHandler}
                    >
                      follow
                    </button>
                  )}
                </div>
              )}
            </div>
            <div className="flex-col gap">
              <hr />
              {myposts.length > 0 ? (
                <div className="flex-col gap">
                  {myposts.map((post) => (
                    <PostCard key={post._id} {...post} />
                  ))}
                </div>
              ) : (
                <h3>No posts yet</h3>
              )}
            </div>
          </section>
          <aside className="padding-edges aside cursor-pointer">
            <SuggestUser />
          </aside>
        </section>
      </div>
    </div>
  );
};
export { ProfilePage };
