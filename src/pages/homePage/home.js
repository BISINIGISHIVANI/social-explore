import "./home.css";
import { Navbar, Sidebar, PostCard, AddPost } from "../../component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/asyncThunk/postThunk";
import { SuggestUser } from "../../component/suggestUser/suggestUsers";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const reversePosts = [...posts].reverse();
  useEffect(() => {
  (async ()=>{
      try {
      const response=dispatch(getPosts());
      if(response.error){
        throw new Error("cant fetch posts")
      }
    } catch (error) {
      console.error(error)
    }
    })()
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
            <SuggestUser />
          </aside>
        </section>
      </div>
    </div>
  );
};
