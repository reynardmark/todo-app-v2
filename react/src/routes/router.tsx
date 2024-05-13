import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { NotFound, Login, Register, Tasks, Dashboard } from "../pages";
import { SideTopBarLayout, WholePageLayout } from "../layouts";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route element={<PublicRoute />}>
        <Route element={<WholePageLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<SideTopBarLayout />}>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Route>
    </Route>,
  ),
);

export default router;
