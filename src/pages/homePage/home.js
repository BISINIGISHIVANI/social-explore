import "./home.css";
import { Navbar, Sidebar, PostCard, AddPost } from "../../component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/asyncThunk/postThunk";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const reversePosts = [...posts].reverse();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="flex-row">
        <div>
          <Sidebar />
        </div>
        <section className="flex-row main-content">
          <section className="bd-sm content flex-col gap">
            <AddPost />
            <div className="flex-col gap">
              {reversePosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </section>
          <aside className=" padding-edges aside">
            <img src="" alt="" />
            <h3>Mahabaratham</h3>
            <button>Follow</button>
          </aside>
        </section>
      </div>
    </div>
  );
};
