import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../../redux/features/auth/authSlice";
import "./sidebar.css";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const logoutHandler = () => {
    if (token) {
      dispatch(logoutUser(token));
      toast.success("your logged out");
      navigate("/");
    }
  };
  return (
    <div>
      <div className="sidebar cursor-pointer">
        <section className="flex-col gap sidebar-icons flex-space-between">
          <div className="flex-col">
            <span
              className={`decoration-none ${
                location?.pathname === "/home" ? "sidebar-active" : ""
              }`}
            >
              <Link to="/home">
                <i className="fa fa-home fa-2x"></i>
                <label> Home</label>
              </Link>
            </span>
            <span
              className={`decoration-none ${
                location?.pathname === "/explore" ? "sidebar-active" : ""
              }`}
            >
              <i className="fa fa-bolt fa-2x"></i>
              <label> Explore</label>
            </span>
            <span
              className={`decoration-none ${
                location?.pathname === "/bookmark" ? "sidebar-active" : ""
              }`}
            >
              <i className="fa fa-bookmark fa-2x"></i>
              <label>Bookmark</label>
            </span>
            <span
              className={`decoration-none ${
                location?.pathname === `/profile/${user.username}`
                  ? "sidebar-active"
                  : ""
              }`}
            >
              <Link to={`/profile/${user.username}`}>
                <i className="fa fa-user-circle-o fa-2x"></i>
                <label> Profile</label>
              </Link>
            </span>
            <div>
              <button className="post-btn cursor-pointer">
                <i className="fa fa-plus-circle fa-2x"></i>
                <label className="padding-right-sm cursor-pointer">
                  Add Post
                </label>
              </button>
            </div>
          </div>
          {user ? (
            <div>
              <label className="cursor-pointer mg-left-sm">
                {user.username}
              </label>
              <i onClick={logoutHandler} className="fa fa-sign-out fa-2x"></i>
            </div>
          ) : (
            <div>
              <label className="cursor-pointer mg-left-sm">login</label>
              <Link to="/login">
                <i className="fa fa-sign-in fa-2x"></i>
              </Link>
            </div>
          )}
        </section>
      </div>
      <div className="mobile-sidebar flex-row flex-space-between">
        <span>
          <i className="fa fa-home fa-2x"></i>
        </span>
        <span>
          <i className="fa fa-bolt fa-2x"></i>
        </span>
        <span>
          <i className="fa fa-plus-circle fa-2x"></i>
        </span>
        <span>
          <i className="fa fa-bookmark fa-2x"></i>
        </span>
        <span>
          <i className="fa fa-user-circle-o fa-2x"></i>
        </span>
      </div>
    </div>
  );
};
export { Sidebar };
