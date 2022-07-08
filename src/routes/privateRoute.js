import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export { PrivateRoute };
