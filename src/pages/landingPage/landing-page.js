import "./landing-page.css";
import { banner } from "../../assets";
import { Link } from "react-router-dom";
import { Navbar } from "../../component/navbar/navbar";
const LandingPage = () => {
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
          <Link to="/home">
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
