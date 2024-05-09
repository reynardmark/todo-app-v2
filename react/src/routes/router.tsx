import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { NotFound, Login, Register, Task, Dashboard } from "../pages";
import { postsLoader } from "./sample";

import { QueryClient } from "react-query";
import { RootLayout } from "../layouts";
const queryClient = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Sample />,
//     errorElement: <NotFound />,
//   },
//   { path: "/register", element: <Register />, errorElement: <NotFound /> },
//   { path: "/login", element: <Login />, errorElement: <NotFound /> },
//   {
//     path: "/tasks",
//     element: <Task />,
//     errorElement: <NotFound />,
//     loader: postsLoader(queryClient),
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route path="/" element={<RootLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Route>,
  ),
);

export default router;
