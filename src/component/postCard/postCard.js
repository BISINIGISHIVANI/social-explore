import "./post.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  likePost,
  unLikePost
} from "../../redux/asyncThunk/postThunk";
import { openEditPost } from "../../redux/features/modalSlice";
import { openModal } from "../../redux/features/modalSlice";
import { useState } from "react";
import { getAllUsers } from "../../redux/asyncThunk/userThunk";
import { useEffect } from "react";
const PostCard = ({ post }) => {
  const {
    _id,
    username,
    content,
    likes: { likedBy },
    comments,
    postImg
  } = post;
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const [openPost, setOpenPost] = useState(false);
  const { username: currentUser } = user;
  const [showComments, setShowComments] = useState(false);
  const openEditPostHandler = () => {
    dispatch(openModal());
    dispatch(openEditPost(post));
  };
  const deletePostHandler = () => {
    dispatch(deletePost({ postId: _id, token }));
  };
  const likePostHandler = () => {
    dispatch(likePost({ postId: _id, token }));
  };
  const unlikePostHandler = () => {
    dispatch(unLikePost({ postId: _id, token }));
  };
  const toggleComment = () => {
    setShowComments((visible) => !visible);
  };
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div className="flex-col gap">
      <div>
        {users
          .filter((user) => user.username === username)
          .map(({ _id, avatar, firstName, lastName }) => (
            <div key={_id} className="post-card padding-xl bd-radius-sm">
              <div className="flex-row gap flex-space-between ">
                <div className="flex-row gap">
                  <img className="user-avatar" src={avatar} alt="profile" />
                  <div className="mg-top-xl">
                    <div className="flex-row gap flex-center">
                      <h4>
                        {firstName} {lastName}
                      </h4>
                      <span>{post.createdAt.slice(0, 10)}</span>
                    </div>
                    <span className="cursor-pointer">@{username}</span>
                  </div>
                </div>
                {username === currentUser ? (
                  <div className="flex-row">
                    <i
                      className="fa fa-ellipsis-h cursor-pointer"
                      onClick={() => setOpenPost((open) => !open)}
                    ></i>
                    {openPost && (
                      <div className="flex-col">
                        <span
                          className="cursor-pointer"
                          onClick={openEditPostHandler}
                        >
                          <i className="fa fa-edit"></i>edit
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={deletePostHandler}
                        >
                          <i className="fa fa-trash"></i>delete
                        </span>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
              <div className="mg-xl flex-col gap">
                <span>{content}</span>
                <img className="post-img flex-center" src={postImg} alt="" />
              </div>
              {showComments && (
                <div className="flex-col gap padding-md">
                  {comments.map(({ _id, firstName, commentData, avatar }) => {
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
                        <p className="padding-md mg-left-xl">{commentData}</p>
                      </div>
                    );
                  })}
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
                  {likedBy.find(
                    (postLiked) => postLiked.username === user.username
                  ) ? (
                    <i className="fa fa-heart" onClick={unlikePostHandler}></i>
                  ) : (
                    <i className="fa fa-heart-o" onClick={likePostHandler}></i>
                  )}
                  {post?.likes?.likedBy?.length}
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
