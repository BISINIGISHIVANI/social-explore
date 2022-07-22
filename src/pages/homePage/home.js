import "./home.css";
import { Navbar } from "../../component/navbar/navbar";
import { Sidebar } from "../../component/sidebar/sidebar";
import { getPosts } from "../../redux/asyncThunk/postThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../component/postcard/postcard";
import { PostModal } from "../../component/postModal/postModal";
import { SuggestUser } from "../../component/userSidebar/userSidebar";
import { EditPostModal } from "../../component/editPostModal/editPostModal";
import { getAllUsers } from "../../redux/asyncThunk/userThunk";
export const Home = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);
  const {
    user: { following, username }
  } = useSelector((state) => state.auth);
  const { editPostModal } = useSelector((state) => state.modal);
  const reversePosts = [...posts].reverse();
  const followingUsersArr = [...following].map((user) => user.username);
  const followingPosts = posts.filter((post) =>
    followingUsersArr.includes(post.username)
  );
  const getFollowingPosts = reversePosts
    .filter((post) => post.username === username)
    .concat(followingPosts);
  useEffect(() => {
    if (status === "idle") {
      dispatch(getPosts());
      dispatch(getAllUsers());
    }
  }, [status, dispatch]);
  return (
    <div>
      <Navbar />
      <div className="flex-row">
        <div>
          <Sidebar />
        </div>
        <section className="flex-row main-content">
          <section className="bd-sm content flex-col gap">
            <h2>hey,welcome back</h2>
            {editPostModal ? <EditPostModal /> : <PostModal />}
            <div className="flex-col gap">
              {getFollowingPosts.map((postData) => (
                <PostCard key={postData._id} {...postData} />
              ))}
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
