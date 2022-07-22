import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editPost } from "../../redux/asyncThunk/postThunk";
import { closeEditPostModal } from "../../redux/features/modal/modalSlice";
const EditPostModal = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { editPostId, editPostText } = useSelector((state) => state.modal);
  const [editedPost, setEditedPost] = useState({
    postId: editPostId,
    postData: editPostText
  });
  const updatePostHandler = () => {
    dispatch(
      editPost({
        postData: editedPost.postData,
        postId: editedPost.postId,
        token
      })
    );
    dispatch(closeEditPostModal());
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(closeEditPostModal())}>close</button>
        <textarea
          value={editedPost.postData}
          onChange={(e) =>
            setEditedPost({ ...editedPost, postData: e.target.value })
          }
        ></textarea>
        <button onClick={updatePostHandler}>submit</button>
      </div>
    </div>
  );
};
export { EditPostModal };
