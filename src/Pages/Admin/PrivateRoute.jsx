import { Navigate } from "react-router-dom";

const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role || "guest";
};

const PrivateRoute = ({ children, allowedRoles }) => {
  const userRole = getUserRole();

  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
