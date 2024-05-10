import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface TopbarProps {
  drawerWidth: number;
  toggleOpenMobile: () => void;
}

export default function Topbar({ drawerWidth, toggleOpenMobile }: TopbarProps) {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setPageTitle("Dashboard");
      return;
    }

    if (location.pathname === "/tasks") {
      setPageTitle("Tasks");
      return;
    }
  }, [location]);

  return (
    <AppBar
      position="fixed"
      component="nav"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar>
        <IconButton
          sx={{
            color: "white",
            display: { sm: "none" },
          }}
          onClick={toggleOpenMobile}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          {pageTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
