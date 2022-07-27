import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addPosts, editPost } from "../../redux/asyncThunk/postThunk";
import { closeModal, openEditPost } from "../../redux/features/modalSlice";
import { gifupload, imageupload } from "../../assets/postImges";
const AddPost = ({ modal }) => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { firstName, lastName } = user;
  const { postToEdit } = useSelector((state) => state.modal);
  const isPostEditing = modal ? true : false;
  const [postContent, setPostContent] = useState(
    isPostEditing ? postToEdit.content : ""
  );
  const [postImage, setPostImage] = useState(
    isPostEditing ? postToEdit.postImg : ""
  );
  const addPostHandler = (e) => {
    e.preventDefault();
    const postData = {
      firstName,
      lastName,
      content: postContent,
      postImg: postImage
    };
    if (postData.content === "") {
      toast.warn("post not to be empty");
    } else {
      dispatch(addPosts({ postData, token }));
      setPostContent("")
      setPostImage("")
      toast.success("post created successfully")
    }
  };
  const editPostHandler = (e) => {
    e.preventDefault();
    const postData = {
      firstName,
      lastName,
      content: postContent,
      postImg: postImage
    };
    dispatch(editPost({ postId: postToEdit._id, postData, token }));
    dispatch(closeModal());
  };
  const fileToUrl = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      let imgUrl = reader.result;
      setPostImage(imgUrl);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const closePostModal = () => {
    dispatch(openEditPost({}));
    dispatch(closeModal());
  };
  return (
    <div className="add-post padding-sm bd-radius-sm">
      <div className="flex-col gap flex-space-between edit-post">
        <div>
          <textarea
            type="textbox"
            className="textarea-post"
            placeholder="start writing post.."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
          {postImage ?
          <div className="bd-sm d-grid-m bd-radius-sm ">
             <img className="img-file bd-sm d-grid bd-radius-sm " src={postImage} alt="" />
             <label className="d-grid">
                  <i
                  className="fa fa-close preview-close-btn  close-btn cursor-pointer"
                  onClick={() => setPostImage("")}
                  ></i>
             </label>
           </div>
          :null
          }
        </div>
        <div className="flex-row gap flex-space-between">
            {!isPostEditing &&
          <div className="flex-row gap flex-center">
            <label htmlFor="img-file">
              <img  className="cursor-pointer avatar-sm "src={imageupload} alt="IMG" />
              <input
                id="img-file"
                className="file-input"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={fileToUrl}
              />
            </label>
            <label htmlFor="gif-file">
              <img className="cursor-pointer avatar-sm "src={gifupload} alt="GIF" />
              <input
                className="file-input"
                id="gif-file"
                type="file"
                accept=".gif"
                onChange={fileToUrl}
              />
            </label>
          </div> }
          {isPostEditing ? (
            <div className="flex-row gap flex-center align-end">
              <button
                className="cursor-pointer post-modal-btn btn-secondary"
                onClick={closePostModal}
              >
                cancel
              </button>
              <button
                className="cursor-pointer post-modal-btn post-btn"
                onClick={(e) => editPostHandler(e)}
              >
                update post
              </button>
            </div>
          ) : (
            <div>
              <button
                className="cursor-pointer post-modal-btn post-btn"
                onClick={(e) => addPostHandler(e)}
              >
                Post
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { AddPost };
