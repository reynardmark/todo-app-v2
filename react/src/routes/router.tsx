import { createBrowserRouter } from "react-router-dom";

import { NotFound, Sample } from "../pages";

const router = createBrowserRouter([{
  path: "/",
  element: <Sample/>,
  errorElement: <NotFound/>
}])

export default router;