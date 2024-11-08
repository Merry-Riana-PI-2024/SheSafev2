import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { isLoggedin, loading } = useSelector((state) => state.users);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
