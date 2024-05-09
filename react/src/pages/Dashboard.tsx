import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  Dashboard as DashboardIcon,
  Task as TaskIcon,
} from "@mui/icons-material";

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

export default function Dashboard() {
  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          margin: "0 -16px",
        }}
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
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <Typography>Contents</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
