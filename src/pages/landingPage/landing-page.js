import "./landing-page.css";
import { banner } from "../../assets";
import { Link } from "react-router-dom";
import { Navbar } from "../../component/navbar/navbar";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const LandingPage = () => {
  const {user}=useSelector((state)=>state.auth)
    const loginHandler=()=>{
      if(!user){
      toast.error("kindly login to your account")
    }
    }
  return (
    <div className="landing-section">
      <Navbar />
      <div className="flex-row flex-wrap align-middle align-center">
        <section>
          <img src={banner} alt="banner" className="landing-page" />
        </section>
        <section className="flex-col gap align-center">
          <h1 className=" text-center"> ✦꙳ Social Explore ✦꙳ </h1>
          <p className="paragraph-sm text-center">
            let us help you to explore your thoughts on social explore{" "}
          </p>
          <Link to="/home"onClick={loginHandler}>
            <button className="start-btn border-none cursor-pointer mg-left">
              Get Started Today
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};
export { LandingPage };
