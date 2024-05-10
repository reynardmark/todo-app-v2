import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  DrawerProps,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  TaskAlt as TaskAltIcon,
  Dashboard as DashboardIcon,
  Task as TaskIcon,
} from "@mui/icons-material";
import { useWindowDimensions } from "../hooks";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  width: number;
  isOpenMobile: boolean;
  toggleOpenMobile: () => void;
  setIsOpenMobile: (desiredValue: boolean) => void;
}

const itemsInSidebar = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    pathname: "/",
  },
  {
    name: "Tasks",
    icon: <TaskIcon />,
    pathname: "/tasks",
  },
];

export default function Sidebar({
  width,
  isOpenMobile,
  toggleOpenMobile,
  setIsOpenMobile,
}: SidebarProps) {
  const theme = useTheme();
  const { width: windowWidth } = useWindowDimensions();
  const [drawerVariant, setDrawerVariant] = useState<DrawerProps["variant"]>(
    windowWidth <= theme.breakpoints.values.sm ? "temporary" : "permanent",
  );

  const location = useLocation();

  useEffect(() => {
    if (windowWidth <= theme.breakpoints.values.sm) {
      setDrawerVariant("temporary");
    } else {
      setDrawerVariant("permanent");
    }
    setIsOpenMobile(false);
  }, [windowWidth]);

  return (
    <Drawer
      variant={drawerVariant}
      open={isOpenMobile}
      PaperProps={{
        sx: {
          width: width,
        },
      }}
      onClose={toggleOpenMobile}
    >
      <Box
        height={64}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <TaskAltIcon fontSize="large" />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            cursor: "default",
            userSelect: "none",
          }}
        >
          Todo V2
        </Typography>
      </Box>
      <Divider />
      <List>
        {itemsInSidebar.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton
              selected={location.pathname === item.pathname}
              href={`${item.pathname}`}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
