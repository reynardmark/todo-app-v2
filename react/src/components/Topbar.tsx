import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface TopbarProps {
  drawerWidth: number;
  toggleOpenMobile: () => void;
}

export default function Topbar({ drawerWidth, toggleOpenMobile }: TopbarProps) {
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
          Title of the page
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
