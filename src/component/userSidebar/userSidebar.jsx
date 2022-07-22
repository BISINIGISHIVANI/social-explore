import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  followUser,
  getAllUsers,
  unfollowUser
} from "../../redux/asyncThunk/userThunk";
import { useNavigate, useParams } from "react-router-dom";
const SuggestUser = () => {
  const dispatch = useDispatch();
  const { userName } = useParams();
  const { user, token } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const followUserHandler = async (e, _id) => {
    e.stopPropagation();
    dispatch(followUser({ followUserId: _id, token }));
  };
  const unfollowUserHandler = (e, _id) => {
    e.stopPropagation();
    dispatch(unfollowUser({ followUserId: _id, token }));
  };
  const otherUsers = users.filter((item) => item.username !== user.username);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <div className="post-card padding-sm mg-xl bd-radius-sm">
        <h2>you might like also</h2>
        {otherUsers.map((user) => (
          <div
            key={user._id}
            className="flex-row gap flex-center flex-space-between"
          >
            <div
              onClick={() => navigate(`/profile/${user.username}`)}
              className="flex-row flex-center  gap mg-xl padding-md"
            >
              <img
                className="user-avatar"
                src={user?.avatar}
                alt="suggested-user"
              />
            </div>
            <div className="width-xl">
              <h3>
                {user?.firstName} {user?.lastName}
              </h3>
              <span>@{user?.username}</span>
            </div>
            <div>
              {user.following.some((user) => user.username === userName) ? (
                <button
                  className="post-btn cursor-pointer"
                  onClick={(e) => unfollowUserHandler(e, user._id)}
                >
                  Following
                </button>
              ) : (
                <button
                  className="post-btn cursor-pointer"
                  onClick={(e) => followUserHandler(e, user._id)}
                >
                  + Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { SuggestUser };
