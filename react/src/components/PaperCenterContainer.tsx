import { Paper } from "@mui/material";
import { ReactNode } from "react";

interface PaperCenterContainerProps {
  children: ReactNode;
}

export default function PaperCenterContainer({
  children,
}: PaperCenterContainerProps) {
  return (
    <Paper
      component="div"
      elevation={1}
      sx={{
        display: "flex",
        padding: "20px 24px",
        justifyContent: "center",
        flexDirection: "column",
        minWidth: "320px",
        gap: "8px",
      }}
    >
      {children}
    </Paper>
  );
}
