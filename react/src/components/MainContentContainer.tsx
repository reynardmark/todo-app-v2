import { Box, Paper } from "@mui/material";

interface MainContentContainerProps {
  drawerWidth: number;
  children: React.ReactNode;
}

export default function MainContentContainer({
  drawerWidth,
  children,
}: MainContentContainerProps) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        mt: "64px",
        ml: { sm: `${drawerWidth}px` },
        p: 2,
        backgroundColor: "#F8F8F8",
      }}
      component="main"
    >
      {children}
    </Box>
  );
}
