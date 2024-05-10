import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

interface TopbarProps {
  drawerWidth: number;
  toggleOpenMobile: () => void;
}

export default function Topbar({ drawerWidth, toggleOpenMobile }: TopbarProps) {
  const location = useLocation();

  const getPageTitle = () => {
    const pathName = location.pathname;

    switch (pathName) {
      case "/":
        return "Dashboard";
      case "/tasks":
        return "Tasks";
    }
  };

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
          {getPageTitle()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
