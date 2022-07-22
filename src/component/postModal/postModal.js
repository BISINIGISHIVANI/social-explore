import { createPosts } from "../../redux/asyncThunk/postThunk";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { closeModal } from "../../redux/features/modal/modalSlice";
const PostModal = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [post, setPost] = useState({ content: "" });
  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  const createPostHandler = async (data) => {
    dispatch(createPosts({ postData: data, token }));
    dispatch(closeModal());
  };
  const saveCreatePostHandler = () => {
    if (post.content !== "") {
      createPostHandler(post);
    } else {
      toast.warn("Post can't be blank");
    }
  };
  return (
    <section className="flex-col post-modal padding-sm margin-sm">
      <textarea
        type="textbox"
        className="textarea-post"
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        value={post.content}
        placeholder="start writing post.."
      ></textarea>
      <div className="flex-row flex-space-between flex-wrap">
        <div className="">
          <div className="flex-row gap">
            <button
              className="cursor-pointer post-modal-btn post-btn"
              onClick={saveCreatePostHandler}
            >
              post
            </button>
            <button onClick={closeModalHandler} className="btn-secondary">
              cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PostModal };
