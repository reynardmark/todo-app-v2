import { createBrowserRouter } from "react-router-dom";

import { NotFound, Login, Register, Sample, Task } from "../pages";
import { postsLoader } from "./sample";

import { QueryClient } from "react-query";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sample />,
    errorElement: <NotFound />,
  },
  { path: "/register", element: <Register />, errorElement: <NotFound /> },
  { path: "/login", element: <Login />, errorElement: <NotFound /> },
  {
    path: "/tasks",
    element: <Task />,
    errorElement: <NotFound />,
    loader: postsLoader(queryClient),
  },
]);

export default router;
