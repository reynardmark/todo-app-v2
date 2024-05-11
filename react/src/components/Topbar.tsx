import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { removeToken } from "../utils/token";

interface TopbarProps {
  drawerWidth: number;
  toggleOpenMobile: () => void;
}

export default function Topbar({ drawerWidth, toggleOpenMobile }: TopbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = () => {
    const pathName = location.pathname;

    switch (pathName) {
      case "/":
        return "Dashboard";
      case "/tasks":
        return "Tasks";
    }
  };

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      component="nav"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        backgroundColor: "#F8F8F8",
        color: "black",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              color: "black",
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
            component="h2"
            variant="h5"
          >
            {getPageTitle()}
          </Typography>
        </Box>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
