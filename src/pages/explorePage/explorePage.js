import { Navbar, Sidebar, PostCard } from "../../component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/asyncThunk/postThunk";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
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
            <div className="flex-col gap">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </section>
          <aside className="padding-edges aside">
            <img src="" alt="" />
            <h3>Mahabaratham</h3>
            <button>Follow</button>
          </aside>
        </section>
      </div>
    </div>
  );
};
export { ExplorePage };
