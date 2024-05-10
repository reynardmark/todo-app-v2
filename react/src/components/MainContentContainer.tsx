import { Box } from "@mui/material";

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
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        mt: "64px",
        ml: { sm: `${drawerWidth}px` },
        p: 4,
      }}
      component="main"
    >
      {children}
    </Box>
  );
}
