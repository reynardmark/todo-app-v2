import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon, Logout as LogoutIcon } from "@mui/icons-material";
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
        <IconButton>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
