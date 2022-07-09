import { loginImg } from "../../assets";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/asyncThunk/authThunk";
import { toast } from "react-toastify";
const SignUpPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  });
  const [passwordType, setPasswordType] = useState("password");
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };
  const checkInputs = () => {
    if (newUser.username && newUser.password && newUser.firstName) {
      return true;
    }
    toast.warn("kindly fill all fields");
    return false;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    if (checkInputs()) {
      const res = dispatch(signupUser(newUser));
      toast.success("successfully signed up");
      if (res?.payload?.status === 201) {
        localStorage.getItem("user", JSON.stringify(res.payload.createdUser))
        localStorage.setItem("user", JSON.stringify(res.payload.createdUser));
      }
      navigate(location?.state?.from.pathname || "/home", { replace: true });
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/home", { replace: true });
    }
  }, [user, navigate]);
  return (
    <div className="flex-row flex-wrap width-md">
      <img src={loginImg} alt="login-img" className="login-img " />
      <div className="login">
        <div className="form">
          <form className="login-form" onSubmit={signupHandler}>
            <span>
              <i className="fa fa-lock fa-3x"></i>
            </span>
            <div className="flex-col gap">
              <div className="flex-row gap">
                <input
                  className="border-none login-input"
                  type="text"
                  name="firstName"
                  placeholder=" first name"
                  value={newUser.firstName}
                  onChange={inputHandler}
                />
                <input
                  className="border-none login-input"
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  value={newUser.lastName}
                  onChange={inputHandler}
                />
              </div>
              <input
                className="border-none login-input"
                type="email"
                name="email"
                placeholder="email"
                value={newUser.email}
                onChange={inputHandler}
              />
              <input
                className="border-none login-input"
                type="text"
                name="username"
                placeholder="username"
                value={newUser.username}
                onChange={inputHandler}
              />
              <div className="flex-row gap password-container">
                <input
                  className="border-none login-password"
                  type={passwordType}
                  name="password"
                  placeholder="password"
                  value={newUser.password}
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
              <button className="border-none primary-btn" type="submit">
                SignUp
              </button>
            </div>
            <p className="padding-sm decoration-none">
              Already have account ?
              <Link to="/login">
                {" "}
                <span className="cursor-pointer">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export { SignUpPage };
