import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { checkAuth } from "../features/userSlice";

function ProtectedRoutes() {
  const dispatch = useDispatch();
  const { isLoggedin, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isLoggedin || localStorage.getItem("isLoggedin") === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoutes;
