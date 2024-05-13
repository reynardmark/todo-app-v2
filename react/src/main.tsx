import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme } from "@mui/material";

const queryClient = new QueryClient();
const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
