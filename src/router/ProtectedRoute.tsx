import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoutes = () => {
  const isTokenValid = () => {
    const token = localStorage.getItem("JWT");
    if (!token) {
      return false;
    } else {
      const decoded = jwtDecode(token);
      return decoded.exp! * 1000 >= new Date().getTime();
    }
  };
  return isTokenValid() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
