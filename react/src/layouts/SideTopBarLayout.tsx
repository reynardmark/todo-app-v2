import {
  AppBar,
  Box,
  Divider,
  Drawer,
  DrawerProps,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  Dashboard as DashboardIcon,
  Task as TaskIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const itemsInSidebar = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Tasks",
    icon: <TaskIcon />,
  },
];

const DRAWER_WIDTH = 240;

export default function SideTopBarLayout() {
  const theme = useTheme();
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const [drawerVariant, setDrawerVariant] =
    useState<DrawerProps["variant"]>("permanent");
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= theme.breakpoints.values.sm) {
      setDrawerVariant("temporary");
    } else {
      setDrawerVariant("permanent");
    }
    setIsOpenMobile(false);
  }, [width]);

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
          <Typography>Contents</Typography>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Drawer
          variant={drawerVariant}
          open={isOpenMobile}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
            },
          }}
          onClose={() => setIsOpenMobile(!isOpenMobile)}
        >
          <Box
            height={64}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                cursor: "default",
              }}
            >
              Todo V2
            </Typography>
          </Box>
          <Divider />
          <List>
            {itemsInSidebar.map((item) => (
              <ListItem key={item.name}>
                <ListItemButton href="#list">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box
          sx={{
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            mt: "64px",
            ml: { sm: `${DRAWER_WIDTH}px` },
            p: 4,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
