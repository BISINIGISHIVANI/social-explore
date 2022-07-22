import "./login.css";
import { loginUser } from "../../redux/asyncThunk/authThunk";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginImg } from "../../assets";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
const LoginPage = () => {
  const dispatch = useDispatch();
  const { user, isLoading ,token} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginData, setloginData] = useState({
    username: "",
    password: ""
  });
  const [passwordType, setPasswordType] = useState("password");
  const guestUser = {
    username: "shivani",
    password: "shivani@12"
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setloginData((prev) => ({ ...prev, [name]: value }));
  };
  const guestUserHandler = (e) => {
    e.preventDefault();
    setloginData(guestUser);
  };
  const checkInputs = () => {
    if (loginData.username && loginData.password) {
      return true;
    }
    toast.warn("kindly fill fields");
    return false;
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    if (checkInputs()) {
      const res = dispatch(loginUser(loginData));
      toast.success("successfully login ");
      if (res?.payload?.status === 200) {
        localStorage.getItem("user", JSON.stringify(res.payload.foundUser));
        localStorage.setItem("user", JSON.stringify(res.payload.foundUser));
      }
    }
  };
  useEffect(() => {
    if (user) {
      navigate(location?.state?.from?.pathname ?? "/", { replace: true });
    }
  },[navigate,user,location]);
  useEffect(() => {
    if (token && location?.pathname === "/") {
      navigate("/home");
    }
  }, [token, navigate, location]);
  return (
    <div className="flex-row flex-wrap width-md">
      <img src={loginImg} alt="login-img" className="login-img " />
      <div className="login">
        <div className="form">
          <form className="login-form" onSubmit={loginHandler}>
            <span>
              <i className="fa fa-lock fa-3x"></i>
            </span>
            <div className="flex-col gap">
              <input
                className="border-none login-input"
                type="text"
                name="username"
                placeholder="username"
                value={loginData.username}
                onChange={inputHandler}
              />
              <div className="flex-row gap password-container">
                <input
                  className="border-none login-password"
                  type={passwordType}
                  name="password"
                  placeholder="password"
                  value={loginData.password}
                  onChange={inputHandler}
                />
                {passwordType === "password" ? (
                  <i
                    className="fa fa-eye-slash eye-icon"
                    onClick={() => setPasswordType("text")}
                  ></i>
                ) : (
                  <i
                    className="fa fa-eye eye-icon"
                    onClick={() => setPasswordType("password")}
                  ></i>
                )}
              </div>
              <button
                className="border-none primary-btn"
               type="submit"
              >
                login {isLoading ? <i className="fa fa-spinner"></i> : ""}
              </button>
              <button className="secondary-btn" onClick={guestUserHandler}>
                Add guest credentials
              </button>
            </div>
            <p className="padding-sm decoration-none">
              Join us Today ?{" "}
              <Link to="/signup">
                <span className="cursor-pointer">SignUp</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export { LoginPage };
