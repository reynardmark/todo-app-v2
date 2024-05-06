import { createBrowserRouter } from "react-router-dom";

import { NotFound, Login, Register, Sample } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sample />,
    errorElement: <NotFound />,
  },
  { path: "/register", element: <Register />, errorElement: <NotFound /> },
  { path: "/login", element: <Login />, errorElement: <NotFound /> },
]);

export default router;
