import { isLoggedIn } from "../utils/token";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  return isLoggedIn() ? <Navigate to="/" /> : <Outlet />;
}
