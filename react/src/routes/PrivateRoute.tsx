import { isLoggedIn } from "../utils/token";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  return isLoggedIn() ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{
        message: "You are not yet logged in.",
        snackBarSeverity: "warning",
      }}
    />
  );
}
