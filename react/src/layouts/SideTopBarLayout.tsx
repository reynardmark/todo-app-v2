import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../components";

const DRAWER_WIDTH = 240;

export default function SideTopBarLayout() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  return (
    <>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar>
          <IconButton
            sx={{
              color: "white",
              display: { sm: "none" },
            }}
            onClick={() => setIsOpenMobile(!isOpenMobile)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            Title of the page
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Sidebar width={DRAWER_WIDTH} />
        <Box
          sx={{
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            mt: "64px",
            ml: { sm: `${DRAWER_WIDTH}px` },
            p: 4,
          }}
          component="main"
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
