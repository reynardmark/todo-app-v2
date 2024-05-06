import { Box } from "@mui/material";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"100vh"}
      sx={{
        backgroundColor: "#F8F8F8",
      }}
    >
      {children}
    </Box>
  );
}
