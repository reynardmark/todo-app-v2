import { createBrowserRouter } from "react-router-dom";

import { NotFound, Register, Sample } from "../pages";

const router = createBrowserRouter([{
  path: "/",
  element: <Sample/>,
  errorElement: <NotFound/>
}, {path: "/register", element: <Register/>, errorElement: <NotFound/>}])

export default router;