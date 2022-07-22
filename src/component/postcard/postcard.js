import "./post.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/asyncThunk/userThunk";
import { deletePost } from "../../redux/asyncThunk/postThunk";
import { openEditPostModal } from "../../redux/features/modal/modalSlice";
const PostCard = (post) => {
  const { _id, content, username, comments } = post;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { users, singleUser } = useSelector((state) => state.users);
  const [openPost, setOpenPost] = useState(false);
  const { username: currentUser } = user;
  const [showComments, setShowComments] = useState(false);
  const [editedPost] = useState({ postId: _id, postData: content });
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, singleUser]);
  const navigateProfileHandler = () => {
    navigate(`/profile/${username}`);
  };
  const deletePostHandler = (id) => {
    dispatch(deletePost({ postId: id, token }));
  };
  const editPostHandler = () => {
    dispatch(openEditPostModal(editedPost));
  };
  const toggleComment = () => {
    setShowComments((visible) => !visible);
  };
  return (
    <div className="flex-col gap">
      <div>
        {users
          .filter((user) => user.username === username)
          .map(({ _id, avatar, firstName, lastName }) => (
            <div key={_id} className="post-card padding-xl bd-radius-sm">
              <div className="flex-row gap ">
                <img className="user-avatar" src={avatar} alt="profile" />
                <div className="mg-top-xl">
                  <div className="flex-row gap flex-center">
                    <h4>
                      {firstName} {lastName}
                    </h4>
                    <span>{post.createdAt.slice(0, 10)}</span>
                  </div>
                  {username === currentUser ? (
                    <div>
                      <i
                        className="fa fa-user cursor-pointer"
                        onClick={() => setOpenPost((open) => !open)}
                      ></i>
                      {openPost && (
                        <div className="flex-col gap">
                          <span onClick={editPostHandler}>
                            <i className="fa fa-edit"></i> edit
                          </span>
                          <span onClick={() => deletePostHandler(post._id)}>
                            <i className="fa fa-trash"></i>delete
                          </span>
                        </div>
                      )}
                    </div>
                  ) : null}
                  <span
                    className="cursor-pointer"
                    onClick={navigateProfileHandler}
                  >
                    @{username}
                  </span>
                </div>
              </div>
              <div className="mg-xl">
                <span>{content}</span>
              </div>
              {showComments && (
                <div className="flex-col gap padding-md">
                  {post?.comments.length > 0 &&
                    post?.comments.map(
                      ({ _id, firstName, commentData, avatar }) => {
                        return (
                          <div
                            key={_id}
                            className="padding-md flex-col cursor-pointer bd-radius-sm comment-container"
                          >
                            <div className="flex-row gap align-item-center">
                              <img
                                className="user-avatar avatar-sm"
                                src={avatar}
                                alt="avatar"
                              />
                              <h3>{firstName}</h3>
                            </div>
                            <p className="padding-md mg-left-xl">
                              {commentData}
                            </p>
                          </div>
                        );
                      }
                    )}
                  <div className="flex-row flex-center gap mg-xl">
                    <div>
                      <img
                        className="user-avatar"
                        src={avatar}
                        alt="your-profile"
                      />
                    </div>
                    <div className="flex-row gap bd-btn width-lg bd-radius-sm">
                      <input
                        className="bd-remove padding-xl width-lg input-bg"
                        type="text"
                        placeholder="add new comment"
                      />
                      <button className="btn-disable bd-remove padding-xl">
                        POST
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex-row flex-space-between mg-xl cursor-pointer">
                <span>
                  {" "}
                  <i className="fa fa-heart-o"></i>
                  {post?.likes?.likedBy?.length}
                  {post?.likes?.likesCount}
                </span>
                <span onClick={toggleComment}>
                  <i className="fa fa-comment-o"></i>
                  {post?.comments?.length > 0 ? comments.length : 0}
                </span>
                <i className="fa fa-bookmark-o"></i>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export { PostCard };
