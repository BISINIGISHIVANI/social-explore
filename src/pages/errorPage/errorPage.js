import "./errorPage.css";
import { errorImg } from "../../assets";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <div className="card-grid">
        <img className="error-img" src={errorImg} alt="404-img" />
      </div>
      <div className="card-grid align-md text-center">
        <h3>Page not Found</h3>
        <Link to="/">
          <button className="button-md cursor-pointer">Back to Home </button>
        </Link>
      </div>
    </div>
  );
};
export { ErrorPage };
