import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { checkAuth } from "../features/userSlice";

function ProtectedRoutes() {
  const dispatch = useDispatch();
  const { isLoggedin, loading, isLoginChecked } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (!isLoginChecked) {
      dispatch(checkAuth());
    }
  }, [dispatch, isLoginChecked]);

  if (loading || !isLoginChecked) {
    return <div>Loading...</div>;
  }

  return isLoggedin || localStorage.getItem("isLoggedin") === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoutes;
